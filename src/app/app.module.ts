import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { CardButtonComponent } from './card-button/card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    CardButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
