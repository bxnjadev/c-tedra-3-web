import { Observable, Observer } from "rxjs";
import { Authentication } from "../model/authentication";
import { RegistrationRequest } from "../model/registration.request";
import { User } from "../model/user";

export interface AuthenticationService {

    authenticate(authentication : Authentication) : Observable<string>;

    register(registerRequest : RegistrationRequest) : Observable<User>;

}