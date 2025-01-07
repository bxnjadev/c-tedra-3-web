import { CommonModule, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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

  }

}
