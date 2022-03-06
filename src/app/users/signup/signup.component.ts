import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private service: ApiserviceService, private router: Router) {}
  errmsg: any;
  errmsgshow = false;

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit(): void {}

  signupSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value, 'signuform###');
      this.errmsgshow = false;

      // callapi signup
      this.service.signup(this.signupForm.value).subscribe((res) => {
        console.log(res, 'res##');
        if (res.status == true) {
          this.router.navigate(['login']);
        } else {
          this.errmsgshow = true;
          this.errmsg = res.msg;
        }
      });
    } else {
      this.errmsgshow = true;
      this.errmsg = 'All field required !!';
    }
  }
}
