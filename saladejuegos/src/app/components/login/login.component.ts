import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AngularFireAuth, private router: Router, private firestore: AngularFirestore) {}

 
  async login(email: string, password: string, event: Event) {
    event.preventDefault();

    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('Autenticación exitosa:', result.user);
      if (result.user) {
        const loginDate = new Date();
        this.firestore.collection('logins').add({
          userId: result.user.uid,
          email: result.user.email,
          loginDate: loginDate
        }).then(() => {
          console.log('Usuario registrado en Firestore con fecha de ingreso');
          this.router.navigate(['/home']);
        }).catch(error => {
          console.error('Error al registrar usuario en Firestore:', error);
          this.router.navigate(['/home']);
        });
      }
    } catch (error) {
      console.error('ERROR! No se pudo iniciar sesión:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'ERROR! No se pudo iniciar sesión',
        heightAuto: false
      });
    }
  }


  goToRegister(): void {
    this.router.navigate(['/registro']);
  }

  fillFields(email: string, password: string) {
    const emailInput = document.querySelector('.login-username') as HTMLInputElement;
    const passwordInput = document.querySelector('.login-password') as HTMLInputElement;

    if (emailInput && passwordInput) {
      emailInput.value = email;
      passwordInput.value = password;
    }
  }  

 
  invalidInput(email: string, password: string) {
    
    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingresa un correo electrónico y una contraseña válidos',
        heightAuto: false
      });
    }
  }
}
