import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageRegistrationComponent } from './homepage-registration/homepage-registration.component';
import { HomepageLoginComponent } from './homepage-login/homepage-login.component';
import { HomepageHomepageComponent } from './homepage-homepage/homepage-homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageRegistrationComponent,
    HomepageLoginComponent,
    HomepageHomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
