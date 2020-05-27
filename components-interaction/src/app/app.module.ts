import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayServerComponent } from './display-server/display-server.component';
import { AddServerComponent } from './add-server/add-server.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayServerComponent,
    AddServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
