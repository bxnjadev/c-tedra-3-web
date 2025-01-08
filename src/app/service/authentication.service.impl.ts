import { Observable, Observer } from "rxjs";
import { Authentication } from "../model/authentication";
import { RegistrationRequest } from "../model/registration.request";
import { User } from "../model/user";
import { AuthenticationService } from "./authentication.service";
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class AuthenticationServiceImpl implements AuthenticationService {

    private url : string = "";
    private httpClient :  HttpClient = inject(HttpClient);

    authenticate(authentication: Authentication): Observable<string> {
        return this.httpClient.post<string>(this.url + "/auth", authentication);
    }
    register(registerRequest: RegistrationRequest): Observable<User> {
        return this.httpClient.post<User>(this.url + "/register", registerRequest);
    }
    
}