import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { getAuth, } from "firebase/auth";
import {
  signOut,
} from '@angular/fire/auth';
import { SignalState } from '../../common/commonService';
import { Router } from '@angular/router';
import { SecurityServiceService } from '../../../authGuard/security-service.service';


@Component({
  standalone: true,
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [NgClass]
})
export class LoginComponent implements OnInit {
  auth: any;
  public currentUser: any
  authVal: any;
  public showMenu: boolean = true;

  constructor(
    private Common: SignalState,
    private router: Router,
    private securityService: SecurityServiceService
  ) { }
  ngOnInit(): void {
    this.Common.currentUserDetails.subscribe((value) => {
      console.log(value);
      this.currentUser = value
    })
    this.Common.auth.subscribe((value) => {
      this.authVal = value;
      console.log(this.authVal)
    })
  }
  logout() {
    this.router.navigate(['']);
    this.securityService.checkForAuth(false);


  }
}
