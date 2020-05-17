import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateLoginComponent } from './template/template-login.component';
import { ReactiveLoginComponent } from './reactive/reactive-login.component';
import { LoginService } from './login.service';
import { HighlightDirective } from './dropdown.directive';
import { ReactiveUserTypeComponent } from './reactive/reactive-usertype/reactive-usertype.component';
import { TDUserTypeComponent } from './template/td-usertype/td-usertype.component';
import { ExtraTextPipe } from './extra-text.pipe';

@NgModule({
  declarations: [
    ReactiveLoginComponent,
    TemplateLoginComponent,
    ReactiveUserTypeComponent,
    TDUserTypeComponent,
    HighlightDirective,
    ExtraTextPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ReactiveLoginComponent,
    TemplateLoginComponent,
    ReactiveUserTypeComponent,
    TDUserTypeComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
