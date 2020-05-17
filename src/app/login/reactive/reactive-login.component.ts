import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IUser, IUserType } from '../model';
import { LoginService } from '../login.service';

@Component({
  selector: 'reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['../login.scss']
})
export class ReactiveLoginComponent implements OnInit {

  public user: IUser;
  public form: FormGroup;
  public userTypes: IUserType[] = [];

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.user = {
      userName: '',
      password: '',
      userType: null
    }
    this.form = this.formBuilder.group({
      userName: new FormControl(this.user.userName, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required]),
      userType: new FormControl(this.user.userType)
     });

    this.userTypes = this.loginService.fetchUserType();
  }

  public displayValue(value: string): void {
    alert('Selected value : ' + value);
  }
}
