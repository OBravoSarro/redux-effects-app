import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { rootReducers, metaReducers, rootEffects } from './store/index';
import { EffectsModule } from '@ngrx/effects';

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
  imports: [
    ...MODULES,
    StoreModule.forRoot(rootReducers, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(rootEffects)
  ],
  providers: [],
  bootstrap: [...COMPONENTS]
})
export class AppModule { }
