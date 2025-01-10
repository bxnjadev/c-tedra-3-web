import { Observable, Observer } from "rxjs";
import { Authentication } from "../model/authentication";
import { RegistrationRequest } from "../model/registration.request";
import { User } from "../model/user";
import { Token } from "../model/token";

export interface AuthenticationService {

    authenticate(authentication : Authentication) : Observable<Token>;

    register(registerRequest : RegistrationRequest) : Observable<User>;

}