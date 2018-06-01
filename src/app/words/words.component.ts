import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Group } from '../../class/group';
import { Word } from '../../class/word';
import { WordService} from '../_services/word.service';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit, OnChanges {

  @Input() word: Word;
  @Input() group: Group;
  @Input() reload: boolean;
  @Output() eventSelect = new EventEmitter<Word>();

  words: Word[];
  selectedWord: Word;

  constructor(private wordService: WordService) {
  }

  ngOnInit() {
    this.selectedWord = this.word;
    this.getWords();
  }

  ngOnChanges() {
    if (this.reload ) {
      this.selectedWord = null;
    } else if (this.word) {
      this.selectedWord = this.word;
    }

  }

  getWords() {
    this.wordService.getWords().subscribe(words => this.words = words);
  }


  select(word: Word) {
      this.selectedWord = word;
      this.eventSelect.emit(this.selectedWord);
  }

  save(word: Word) {
    let indexWordFound: number;

    if (!word.id) {
      const newWord = new Word;
      newWord.id = -1;
      newWord.name = word.name;
      newWord.meaning = word.meaning;
      newWord.groups.push(this.group);
      this.words.push(newWord);
    } else {
      indexWordFound = this.words.findIndex(findWord => findWord.id === word.id);
      if (indexWordFound >= 0) {
        this.words[indexWordFound].name = word.name;
        this.words[indexWordFound].meaning = word.meaning;
      }
    }
    this.selectedWord = null;
  }

  remove(word: Word) {
    let indexWordFound: number;

    indexWordFound = this.words.findIndex(findWord => findWord.id === word.id);
    if (indexWordFound >= 0) {
      this.words.splice(indexWordFound, 1);
    }
    this.select(null);
  }

}
