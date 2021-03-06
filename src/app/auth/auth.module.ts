import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormExtensionsModule } from '../form-extensions/form-extensions.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormExtensionsModule,
    MaterialModule,
  ],
})
export class AuthModule {}
