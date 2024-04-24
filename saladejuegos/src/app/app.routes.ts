import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "registro",
        component: RegistroComponent
    },
    {
        path: "home/quien-soy",
        component: QuienSoyComponent
    },
    
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
