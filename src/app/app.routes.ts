import { Routes } from '@angular/router';
import { LoginComponent } from './firebaseAuth/login/login.component';
import { RouteGuardService } from '../service/routes/route-guard.service';



export const routes: Routes = [
    {
        path: 'loginUser',
        component: LoginComponent,
        canActivate: [RouteGuardService]
    }
];
