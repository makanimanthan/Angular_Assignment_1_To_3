import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUserType } from '../../model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'reactive-usertype',
  templateUrl: './reactive-usertype.component.html',
  styleUrls: ['../../login.scss']
})
export class ReactiveUserTypeComponent {

  @Input()
  public form: FormGroup;

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
