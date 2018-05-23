import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { CardButtonComponent } from './card-button/card-button.component';
import { GroupsComponent } from './groups/groups.component';
import { WordsComponent } from './words/words.component';
import { WordDetailComponent } from './word-detail/word-detail.component';
import { WordsListComponent } from './words-list/words-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    CardButtonComponent,
    GroupsComponent,
    WordsComponent,
    WordDetailComponent,
    WordsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
