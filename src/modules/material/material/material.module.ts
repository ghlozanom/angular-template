import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdcButtonModule} from '@angular-mdc/web/button';
import {MdcFormFieldModule} from '@angular-mdc/web/form-field';
import {MdcTextFieldModule} from '@angular-mdc/web/textfield';


@NgModule({
  declarations: [],
  exports: [
    MdcButtonModule,
    MdcFormFieldModule,
    MdcTextFieldModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
