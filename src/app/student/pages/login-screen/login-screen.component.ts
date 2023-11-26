import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private academiaServiceService: AcademiaserviceService,
  ) {

    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }


  onSubmit(): void {
    if (this.userForm.valid) {
      // console.log(this.userForm.value);
      this.academiaServiceService.login(this.userForm.value);
    }

  }

}
