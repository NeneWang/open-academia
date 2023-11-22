import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-courses-dialog-component',
  templateUrl: './courses-dialog-component.component.html',
  styleUrls: ['./courses-dialog-component.component.css']
})
export class CoursesDialogComponentComponent {
  nameControl = new FormControl();

  
  courseForm = new FormGroup({
    name: this.nameControl,
  });

  constructor(){

  }

  onSubmit(): void {
    
  }
}
