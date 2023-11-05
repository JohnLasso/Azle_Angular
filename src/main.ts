import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { AuthClient } from "@dfinity/auth-client";




  bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule
      ),
      
    ],
  });



