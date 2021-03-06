import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private formbilder: FormBuilder, public sharedservice: SharedService) { }

  form: FormGroup = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  error: string | null;

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
