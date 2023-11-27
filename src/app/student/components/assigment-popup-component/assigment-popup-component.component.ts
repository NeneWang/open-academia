import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Section_UserSection } from 'src/app/academia/models';

@Component({
  selector: 'app-assigment-popup-component',
  templateUrl: './assigment-popup-component.component.html',
  styleUrls: ['./assigment-popup-component.component.css']
})
export class AssigmentPopupComponentComponent {
  section: Section_UserSection;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Section_UserSection
  ) {
    console.log('data', data);
    this.section = data;
  }


}
