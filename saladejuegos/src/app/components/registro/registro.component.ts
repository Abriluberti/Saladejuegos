import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,CommonModule, FormsModule ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  errorCheck: boolean = false;
  Message: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  register(email: string, password: string): void {
    if (email && password) {
      this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
         
          this.router.navigate(['/home']);

          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Bienvenido!',
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((error) => {
          this.errorCheck = true;
          console.log(error.code);
          switch (error.code) {
            case 'auth/email-already-in-use':
              this.Message = 'Ya se encuentra un usuario registrado con ese email';
              break;
            default:
              this.Message = 'Hubo un problema al registrar.';
              break;
          }
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: this.Message,
            timer: 4000
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Complete los datos para registrar',
        text: 'Complete TODOS los datos requeridos.',
        timer: 4000
      });
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}