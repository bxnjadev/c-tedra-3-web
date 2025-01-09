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
        "title": ['', [Validators.required, Validators.minLength(5)]],
        "date": [''],
        "file": [null]
    });
  }

  onFileChange(event : Event) : void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.form.patchValue({ file }); 
    }
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
