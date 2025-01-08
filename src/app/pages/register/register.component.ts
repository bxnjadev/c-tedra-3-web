import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { AuthenticationServiceImpl } from '../../service/authentication.service.impl';
import { RegistrationRequest } from '../../model/registration.request';

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

  formBuilder : FormBuilder = inject(FormBuilder);
  authenticationService : AuthenticationService = inject(AuthenticationServiceImpl);

  ngOnInit(): void {
    this.createForm();
    
  }

  public createForm() : void {
      this.form = this.formBuilder.group({
        "email": ['', [Validators.required, Validators.email]],
        "password": ['', [Validators.required]]
      });
  }

  public getProperty(propterty : string) {
    return this.form.get(propterty);
  }

  public allPropertiesAreValid() : boolean | undefined {
    return this.getProperty('email')?.valid && 
    this.getProperty('password')?.valid;
  }


  public onSubmit() {

    var request : RegistrationRequest = {
        email : this.getProperty('email')?.value,
        password : this.getProperty('password')?.value
    };

    this.authenticationService.register(request).subscribe({
      next: () => {
          console.log("Cuenta creada correctamente");
      },
      error: () => {
          console.log("Error creando la cuenta, el correo ya existe");
      }
    });

  }

}
