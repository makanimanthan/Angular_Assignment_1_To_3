import { Component, OnInit } from '@angular/core';
import { IUser, IUserType } from '../model';
import { LoginService } from '../login.service';

@Component({
  selector: 'template-login',
  templateUrl: './template-login.component.html',
  styleUrls: ['../login.scss']
})
export class TemplateLoginComponent implements OnInit {

  public user: IUser;
  public userTypes: IUserType[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = {
      userName: '',
      password: '',
      userType: null
    };

    this.userTypes = this.loginService.fetchUserType();
  }

  public displayValue(value: string): void {
    alert('Selected value : ' + value);
  }
}
