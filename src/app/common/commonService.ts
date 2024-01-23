import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable()
export class SignalState {
    currentUser: any
    public currentUserDetails: BehaviorSubject<any> = new BehaviorSubject<any>({});
    public auth:  BehaviorSubject<any> = new BehaviorSubject<any>({});
    constructor() { }
    public loggedUserDetails(data: any) {
        this.currentUserDetails.next(data)

    }
    public AuthValue(data:any){
        this.auth.next(data);
    }

}