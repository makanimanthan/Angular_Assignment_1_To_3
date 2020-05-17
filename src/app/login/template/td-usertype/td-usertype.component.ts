import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUserType, IUser } from '../../model';

@Component({
  selector: 'td-usertype',
  templateUrl: './td-usertype.component.html',
  styleUrls: ['../../login.scss']
})
export class TDUserTypeComponent {

  @Input()
  public user: IUser;

  @Input()
  public userTypes: IUserType[] = [];

  @Output() 
  userTypeChanged = new EventEmitter<string>();

  public onUserTypeChange(name: any): void {
    if (this.userTypeChanged) {
      this.userTypeChanged.next(name.selectedOptions[0].text);
    }
  }
}
