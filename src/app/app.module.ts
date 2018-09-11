import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSoapModule } from 'ngx-soap';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatToolbarModule, MatInputModule,
  MatButtonModule, MatCardModule, MatProgressBarModule, MatFormFieldModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { RestComponent } from './components/rest/rest.component';
import { GithubAuthInterceptor } from './githubauth.interceptor';
import { SoapComponent } from './components/soap/soap.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevelopersComponent,
    RestComponent,
    SoapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxSoapModule,
    MatSidenavModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatInputModule,
    MatButtonModule, 
    MatCardModule, 
    MatProgressBarModule, 
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GithubAuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
