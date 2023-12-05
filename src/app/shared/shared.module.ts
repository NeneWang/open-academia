import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { MatListModule } from '@angular/material/list';
import { UsernamePipe } from './pipes/username.pipe';
import { SmallImageDirective } from './directives/small-image.directive';
import { ColorCategoryDirective } from './directives/color-category.directive';




@NgModule({
  declarations: [
     CapitalizePipe,
     UsernamePipe,
     SmallImageDirective,
     ColorCategoryDirective,
  ],
  imports: [
    CommonModule, MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    CapitalizePipe,
    UsernamePipe,
    SmallImageDirective,
    ColorCategoryDirective,
  ],
})
export class SharedModule { }
