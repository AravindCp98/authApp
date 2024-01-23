import { FirebaseApp } from "@angular/fire/app/app";
import { initializeApp } from "firebase/app";
const firebaseConfig: any = {
    apiKey: "AIzaSyDlfOIHlnePe4VgThs9GgegbxCuFHFb3ZI",
    authDomain: "aravindcp1998cp.firebaseapp.com",
    projectId: "aravindcp1998cp",
    storageBucket: "aravindcp1998cp.appspot.com",
    messagingSenderId: "199015233673",
    appId: "1:199015233673:web:876feae38d8053c2c66e58"
};
const auth = initializeApp(firebaseConfig);
export {firebaseConfig,auth};

