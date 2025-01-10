import { catchError, Observable, Observer, throwError } from "rxjs";
import { Authentication } from "../model/authentication";
import { RegistrationRequest } from "../model/registration.request";
import { User } from "../model/user";
import { AuthenticationService } from "./authentication.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Environment } from "../environment";
import { Token } from "../model/token";

@Injectable({
    providedIn: 'root'
  })
export class AuthenticationServiceImpl implements AuthenticationService {

    private url : string = Environment.url;
    private httpClient :  HttpClient = inject(HttpClient);

    authenticate(authentication: Authentication): Observable<Token> {
        return this.httpClient.post<Token>(this.url + "auth", authentication);
    }
    register(registerRequest: RegistrationRequest): Observable<User> {
        return this.httpClient.post<User>(this.url + "register", registerRequest);
    }
    
}