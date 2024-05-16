import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TOTS_CORE_PROVIDER, TotsCoreModule } from '@tots/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  TOTS_AUTH_PROVIDER,
  TotsAuthConfig,
  TotsAuthInterceptor,
  TotsAuthModule,
} from '@tots/auth';
import { TOTS_CLOUD_STORAGE_PROVIDER } from '@tots/cloud-storage';
import { ClientListComponent } from './components/client/client-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { RegisterComponent } from './components/register/register.component';
import { TotsTableModule } from 'tots/table/src/lib/table.module';
import { TotsFormModule } from 'tots/form/src/lib/form.module';

@NgModule({
  declarations: [AppComponent, ClientListComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,

    /** Tots Libraries */
    TotsCoreModule,
    TotsAuthModule,
    BrowserAnimationsModule,
    TotsTableModule,
    TotsFormModule
  ],
  providers: [
    {
      provide: TOTS_CORE_PROVIDER,
      useValue: {
        baseUrl: 'https://agency-coda.uc.r.appspot.com/',
      },
    },
    {
      provide: TOTS_CLOUD_STORAGE_PROVIDER,
      useValue: {
        bucket: 'codahub-files',
      },
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TotsAuthInterceptor,
      multi: true,
    },
    {
      provide: TOTS_AUTH_PROVIDER,
      useValue: {
        signInPath: 'oauth/token',
        changePasswordPath: 'users/me/password',
      } as TotsAuthConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
