import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


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
    private matDialogRef: MatDialogRef<CoursesDialogComponentComponent>
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      // image: ['', Validators.required],
      category: [this.courseCategories[0], Validators.required],
      intensity: [this.intensityOptions[0], Validators.required],
      credits: [0, Validators.required],
    });
  }

  onSubmit(): void {
    console.log('Is valid? this.courseForm', this.courseForm.valid)
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      this.matDialogRef.close(this.courseForm.value);
    }
  }
}
