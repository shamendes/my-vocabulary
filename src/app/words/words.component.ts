import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../class/group';
import { WORDS } from '../../mock/mock-words';
import { GenericRecord } from '../../class/generic-record';
import { Word } from '../../class/word';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  @Input() group: Group;

  // MOCK of words
  words = WORDS;

  selectedWord: Word;


  genericRecords: GenericRecord[];

  constructor() {
    this.resyncGenericRecords();
  }

  ngOnInit() {
  }

  private resyncGenericRecords() {
    this.genericRecords = [];
    for (const word of this.words) {
      this.genericRecords.push(word.asGenericRecord());
   }
  }

  select(genericRecord: GenericRecord) {
    let indexWordFound: number;

    indexWordFound = this.words.findIndex(findWord => findWord.id === genericRecord.id);
    if (indexWordFound >= 0) {
      this.selectedWord = this.words[indexWordFound];
    }
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
    this.resyncGenericRecords();
  }

  remove(word: Word) {
    let indexWordFound: number;

    indexWordFound = this.words.findIndex(findWord => findWord.id === word.id);
    if (indexWordFound >= 0) {
      this.words.splice(indexWordFound, 1);
      this.resyncGenericRecords();
    }

  }

}
