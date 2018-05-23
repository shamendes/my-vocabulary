import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Word } from '../../class/word';
import { GenericRecord } from '../../class/generic-record';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

  @Input() wordsList: Word[];
  @Output() eventSelect = new EventEmitter<Word>();

  constructor() { }


  ngOnInit() {
    this.wordsList.sort(GenericRecord.sortByName);
  }

  add() {
    const newWord = new Word;
    this.select(newWord);
  }

  select(word: Word) {
    this.eventSelect.emit(word);
  }

}
