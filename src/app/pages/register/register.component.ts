import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthenticationServiceImpl } from '../../service/authentication.service.impl';
import { RegistrationRequest } from '../../model/registration.request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    NgIf,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  form! : FormGroup;

  message : string = "";
  showMessage : boolean = false;
   router : Router = inject(Router);
  formBuilder : FormBuilder = inject(FormBuilder);
  authenticationService : AuthenticationService = inject(AuthenticationServiceImpl);

  ngOnInit(): void {
    this.createForm();
    
  }

  public createForm() : void {
      this.form = this.formBuilder.group({
        "email": ['', [Validators.required, Validators.email]],
        "password": ['', [Validators.required, Validators.pattern(/^(?=(.*\d.*))[\w\W]{6,}$/)]]
      });
  }

  public getProperty(propterty : string) {
    return this.form.get(propterty);
  }

  public allPropertiesAreValid() : boolean | undefined {
    return this.getProperty('email')?.valid && 
    this.getProperty('password')?.valid;
  }

  public resetForm() : void {
    this.form.reset();
  }



  public onSubmit() {


    var request : RegistrationRequest = {
        email : this.getProperty('email')?.value,
        password : this.getProperty('password')?.value
    };

    this.authenticationService.register(request).subscribe({
      next: () => {
          alert("Registrado correctamente");
          this.resetForm();
          this.router.navigate(['/auth']);
      },
      error: (error) => {
        alert(error);
      }
    });

  }

}
