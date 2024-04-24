import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp } from 'firebase/app';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const firebaseConfig = {

  apiKey: "AIzaSyDSEN-yLswCl_56wMVHYXjmkY-PCSkvYDI",

  authDomain: "sala-de-juegos-4a7bc.firebaseapp.com",

  projectId: "sala-de-juegos-4a7bc",

  storageBucket: "sala-de-juegos-4a7bc.appspot.com",

  messagingSenderId: "752027239705",

  appId: "1:752027239705:web:c9cc70b9a9dd2ed17e3188",

  measurementId: "G-CLXT6GNT5Y"

};
initializeApp(firebaseConfig);


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(HttpClientModule, AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule, CommonModule, FormsModule, ReactiveFormsModule)],
  
};
