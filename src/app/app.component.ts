import { Component } from '@angular/core';
import { Language } from '../class/language';
import { Group } from '../class/group';
import { Word } from '../class/word';
import { SearchResult } from '../class/search-result';

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
  reloadWordsComponent: boolean;

  goSearch: boolean;
  searchedText: string;


  selectLanguage(language: Language): void {
    this.selectedLanguage = language;
  }

  selectGroup(group: Group): void {
    this.selectedGroup = group;
  }

  selectWord(word: Word): void {
    this.reloadWordsComponent = false;
    this.selectedWord = word;
  }

  resetLanguage() {
    this.selectedLanguage = null;
    this.selectedGroup = null;
    this.selectedWord = null;
  }

  resetGroup() {
    this.selectedGroup = null;
    this.selectedWord = null;
  }

  resetWord() {
    this.reloadWordsComponent = true;
    this.selectedWord = null;
  }

  goSelectedResult(selectedResult: SearchResult): void {
    if (selectedResult.word) {
      this.selectLanguage(selectedResult.word.groups[0].language);
      this.selectGroup(selectedResult.word.groups[0]);
      this.selectWord(selectedResult.word);
    } else if (selectedResult.group) {
      this.selectLanguage(selectedResult.group.language);
      this.selectGroup(selectedResult.group);
      this.resetWord();
    } else if (selectedResult.language) {
      this.selectLanguage(selectedResult.language);
      this.selectedGroup = null;
      this.selectedWord = null;
    }
    this.goSearch = false;
    this.searchedText = null;
  }

  search() {
    this.goSearch = true;
  }

}
