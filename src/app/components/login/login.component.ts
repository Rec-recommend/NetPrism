import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userId = new FormControl('', [Validators.required])
  public currentUser:Number;

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  public onSubmit = () => {
    this.login(this.userId.value);
    this.loginService.getLoggedInUser().subscribe(id => this.currentUser = id)
  }

  public login = (userId: number) => {
    this.loginService.logIn(userId);
  }
}
