import { Component } from '@angular/core';
import { Language } from '../class/language';
import { Group } from '../class/group';
import { Word } from '../class/word';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Vocabulary';

  selectedLanguage: Language;
  selectedGroup: Group;
  selectedWord: Word;


  selectLanguage(language: Language): void {
    this.selectedLanguage = language;
  }

  selectGroup(group: Group): void {
    this.selectedGroup = group;
  }

  selectWord(word: Word): void {
    this.selectedWord = word;
  }

}
