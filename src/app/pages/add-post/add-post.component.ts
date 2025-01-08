import { CommonModule, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  imports: [
     NgIf,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {

  form! : FormGroup;
  formBuilder : FormBuilder = Inject(FormBuilder);

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
        "title": ['', [Validators.required]],
        "date": ['']
    });
  }

  getProperty(property : string) {
    return this.form.get(property);
  }

  allPropertiesAreValid() {
    return this.getProperty('title')?.valid;
  }

  onSubmit(){

  }


}
