import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData!: FormGroup;
  isFormSubmit:boolean = false

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.formData = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  login() {
    this.isFormSubmit = true
    if(this.formData.invalid) {
      return 
    }
    this.authService.login(this.formData.value)
    this.formData.reset()
    this.isFormSubmit = false
  }

}
