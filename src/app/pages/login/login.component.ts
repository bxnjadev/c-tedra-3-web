import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthenticationServiceImpl } from '../../service/authentication.service.impl';
import { Authentication } from '../../model/authentication';
import { LocalStorageService } from '../../service/local.storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    NgIf,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  authenticateService : AuthenticationService = inject(AuthenticationServiceImpl);
  localStorageService : LocalStorageService = inject(LocalStorageService);
  router : Router = inject(Router);
  form! : FormGroup;
  formBuilder : FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.createForm();
  }

  createForm() : void {
    this.form = this.formBuilder.group({
        "email": ['', [Validators.required]],
        "password": ['', [Validators.required]]
    });
  }
  
  public getProperty(name : string){
    return this.form.get(name);
  }

  public allPropertiesAreValid() : boolean | undefined {
    return this.form.get('email')?.valid && 
    this.form.get('password')?.valid;
  }

  public onSubmit() {

      var authenticationRequest : Authentication = {
          email : this.getProperty('email')?.value,
          password : this.getProperty('password')?.value
      };

      console.log("SENDIN HTTP REQUEST_ " + authenticationRequest);
      this.authenticateService.authenticate(
        authenticationRequest
      ).subscribe({
          next: (token) => {
              alert("Sesión Iniciada");
              console.log("Saving TOKEN = " + token);
              this.localStorageService.setVar('token', token.tokenContent);
              this.localStorageService.setVar('userId', token.userId);
              this.router.navigate(['']);
          },
          error: (error)  => {
              alert("Credenciales invalidas");
          }
      });

  }

}
