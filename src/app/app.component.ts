import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./firebaseAuth/login/login.component";
import { GoogleAuthProvider, signInWithPopup, getAuth, Auth } from "firebase/auth";
import { SignalState } from './common/commonService'
import { signOut } from '@angular/fire/auth';
import { SecurityServiceService } from '../authGuard/security-service.service';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, LoginComponent]
})
export class AppComponent implements OnInit {
  public auth: any;
  // @canActivate({

  // })
  constructor(private router: Router,
    private common: SignalState,
    private securtityService: SecurityServiceService
  ) {
    this.currentRoute();
  }
  routerLink: string = ""
  async ngOnInit(): Promise<void> {
    this.auth = getAuth();
    this.common.AuthValue(this.auth);


  }
  currentRoute() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.routerLink = event.url;
      }
    });
  }
  siginInByGoogleAccount(auth: Auth) {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = await GoogleAuthProvider.credentialFromResult(result);
        if (result && result.user.emailVerified) {
          this.securtityService.checkForAuth(true);
          this.router.navigate(['/loginUser'])
          this.common.loggedUserDetails(result.user);
          
        }
        result.user.photoURL
        result.user.displayName
        const token = credential?.accessToken;
      }).catch((error) => {
        console.log(error)
        this.securtityService.checkForAuth(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  }
  signIn() {
    this.siginInByGoogleAccount(this.auth)
  }


}
