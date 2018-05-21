import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Word } from '../../class/word';

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.component.html',
  styleUrls: ['./word-detail.component.css']
})
export class WordDetailComponent implements OnInit {

  @Input() word: Word;
  @Output() eventSave = new EventEmitter<Word>();
  @Output() eventRemove = new EventEmitter<Word>();

  constructor() { }

  ngOnInit() {
    if (!this.word) {
      this.word = new Word;
    }
  }


  save() {
    this.eventSave.emit(this.word);
    this.word = new Word;
  }

  remove() {
    if (confirm('Remove word?')) {
      this.eventRemove.emit(this.word);
      this.word = new Word;
    }
  }

}
