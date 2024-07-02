import { Component } from '@angular/core';
import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';
import 'zone.js';
//import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';

//bootstrapApplication(AppComponent);

platformBrowser().bootstrapModule(AppModule)