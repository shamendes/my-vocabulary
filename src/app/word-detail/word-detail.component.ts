import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('inputWordName') inputWordName: ElementRef;

  constructor() { }

  ngOnInit() {
    if (!this.word) {
      this.word = new Word;
    }
    if (this.inputWordName) {
      this.inputWordName.nativeElement.focus();
    }
  }

  save() {
    this.eventSave.emit(this.word);
    this.word = new Word;
  }

  remove() {
    if (confirm('Remove word?')) {
      this.eventRemove.emit(this.word);
    }
  }

}
