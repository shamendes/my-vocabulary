import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {LANGUAGES} from '../../mock/mock-languages';
import { GenericRecord } from '../../class/generic-record';
import { Language } from '../../class/language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css', '../app.component.css']
})
export class LanguagesComponent implements OnInit {

  @Output() eventSelect = new EventEmitter<Language>();

  // MOC of Languages
  languages = LANGUAGES;

  // Actions buttons
  genericActions: GenericRecord[] = [
    { id: 1, name: '+', action: 'new'   }
  ];

  constructor() { }

  ngOnInit() {
  }

  add(genericRecord: GenericRecord) {
    const newLanguage = new Language;

    newLanguage.id = genericRecord.id;
    newLanguage.name = genericRecord.name;
    this.languages.push(newLanguage);
  }

  remove(genericRecord: GenericRecord) {
    let indexLanguageFound: number;

    indexLanguageFound = this.languages.findIndex( findLanguage => findLanguage.id === genericRecord.id);
    if (indexLanguageFound >= 0) {
      this.languages.splice(indexLanguageFound, 1);
    }
  }

  update(genericRecord: GenericRecord) {
    let indexLanguageFound: number;

    indexLanguageFound = this.languages.findIndex( findLanguage => findLanguage.id === genericRecord.id);
    if (indexLanguageFound >= 0) {
      this.languages[indexLanguageFound].name = genericRecord.name;
    }
  }

  select(genericRecord: GenericRecord) {
    let indexLanguageFound: number;

    indexLanguageFound = this.languages.findIndex( findLanguage => findLanguage.id === genericRecord.id);
    if (indexLanguageFound >= 0) {
      this.eventSelect.emit(this.languages[indexLanguageFound]);
    }
  }

}
