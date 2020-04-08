import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private formbilder: FormBuilder, public sharedservice: SharedService) { }

  form: FormGroup = new FormGroup({
    Username: new FormControl('liu'),
    Password: new FormControl('12345'),
  });

  error: string | null ;

  submit() {
    if (this.form.valid) {
      const sharedserviceSignIn = this.sharedservice.SignIn(this.form.value);
      console.log('this.sharedservice.SignIn' + sharedserviceSignIn);
      this.error = sharedserviceSignIn;
    }
  }

  ngOnInit(): void {
  }

}
