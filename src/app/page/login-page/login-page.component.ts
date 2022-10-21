import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/service/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private userService:UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  error_mess!:any;

  onHandleSignin() {
    this.userService.signin(this.signinForm.value).subscribe(data => {
    localStorage.setItem('user', JSON.stringify(data));
    this.router.navigateByUrl('/admin')
    return this.error_mess = "Successful login!"
   },error => {
    console.log(error)
    return this.error_mess = error['error'];
   }
   )
  }

}
