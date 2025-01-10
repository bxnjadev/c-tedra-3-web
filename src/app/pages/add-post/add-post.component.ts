import { CommonModule, DatePipe, NgIf } from '@angular/common';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from '../../service/local.storage.service';
import { PostService } from '../../service/post.service';
import { PostServiceImpl } from '../../service/post.service.impl';
import { Route, Router } from '@angular/router';

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
export class AddPostComponent  {

  form! : FormGroup;
  router : Router = inject(Router);
  formBuilder : FormBuilder = inject(FormBuilder);
  localStorageService : LocalStorageService = inject(LocalStorageService);
  postService : PostService = inject(PostServiceImpl);

  constructor() {
    this.createForm();
  }

  createForm(){
    this.form = this.formBuilder.group({
        "title": ['', [Validators.required, Validators.minLength(5)]],
        "date": ['', []],
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
      var title = this.getProperty('title')?.value;

      console.log("DATE : " + this.getProperty('date')?.value);

      var dateTransformed = this.getProperty('date')?.value;

      var userId = this.localStorageService.getVar('userId');
      var file = this.getProperty('file')?.value;

      console.log("PUBLISSHH");

      this.postService.publish(userId, title, dateTransformed + "", 
        file
      ).subscribe({
        next: () => {
          alert("Imagen subida");
          this.router.navigate(['']);
        },
        error: () => {
          alert("Error subiendo la imagen");
        }
      })

  }

}
