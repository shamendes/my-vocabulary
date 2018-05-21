import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { GroupsComponent } from './groups/groups.component';
import { AlphabeticListComponent } from './alphabetic-list/alphabetic-list.component';
import { WordsComponent } from './words/words.component';
import { WordDetailComponent } from './word-detail/word-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    CardButtonComponent,
    GroupsComponent,
    AlphabeticListComponent,
    WordsComponent,
    WordDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
