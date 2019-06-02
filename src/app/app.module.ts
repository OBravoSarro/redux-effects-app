import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  AppComponent
];
const MODULES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  SharedModule,
  UsersModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
  bootstrap: [...COMPONENTS]
})
export class AppModule { }
