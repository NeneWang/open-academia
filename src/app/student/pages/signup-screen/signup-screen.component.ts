import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private academiaServiceService: AcademiaserviceService,
  ) {

    this.userForm = this.fb.group({
      first: ['', Validators.required],
      last: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });

  }


  onSubmit(): void {
    console.log('submit called', this.userForm.value, this.userForm.valid)
    if (this.userForm.valid) {
      const newUser: User = {
        id: new Date().getTime(),
        first: this.userForm.value.first,
        last: this.userForm.value.last,
        email: this.userForm.value.email,
        password: this.userForm.value.password,
        token: '',
        avatar: '',
        role: 'STUDENT',
      }

      this.academiaServiceService.createUser$(newUser).subscribe({
        next: (result) => {
          console.log('result', result)
          if (result) {
            this.academiaServiceService.login(newUser);
          }
        }
      });

    }

  }
}
