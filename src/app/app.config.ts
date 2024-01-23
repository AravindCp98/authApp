import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { getAuth } from "firebase/auth";
import { provideAuth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth'
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FirebaseApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { firebaseConfig } from '../firebase.cofig';
import { SignalState } from './common/commonService';



export const appConfig: ApplicationConfig = {
  providers: [
    SignalState,
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp(firebaseConfig),
        provideAuth(() => getAuth(initializeApp(firebaseConfig))),
        signOut,
      )
    )],



};
