import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Component, NgModule, Injectable, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from 'src/app/academia/models';


@Component({
  selector: 'app-courses-dialog-component',
  templateUrl: './courses-dialog-component.component.html',
  styleUrls: ['./courses-dialog-component.component.css']
})
export class CoursesDialogComponentComponent {
  courseForm: FormGroup;


  // Define options for category and intensity dropdowns
  courseCategories: string[] = ['Computer Science', 'Marketing', 'Artificial Intelligence'];
  intensityOptions: string[] = ['Low', 'Medium', 'High'];

  constructor(
    private fb: FormBuilder,
    private academiaServiceService: AcademiaserviceService,
    private matDialogRef: MatDialogRef<CoursesDialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private course?: Course
  ) {

    if(course){
      console.log('course', course);
      // this.courseForm.patchValue(c);
      // this.courseForm.patchValue(course);
      this.courseForm = this.fb.group({
        name: [course.name, Validators.required],
        description: [course.description, Validators.required],
        image: [course.image],
        category: [course.category, Validators.required],
        intensity: [course.intensity, Validators.required],
        credits: [course.credits, Validators.required],
      });
    }else{

      this.courseForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        image: [''],
        category: [this.courseCategories[0], Validators.required],
        intensity: [this.intensityOptions[0], Validators.required],
        credits: [0, Validators.required],
      });
    }

    
  }

  onSubmit(): void {
    console.log('Is valid? this.courseForm', this.courseForm.valid)
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      this.matDialogRef.close(this.courseForm.value);
    }
  }

  
  public get isEditing(): boolean {
    return !!this.course;
  }

}
