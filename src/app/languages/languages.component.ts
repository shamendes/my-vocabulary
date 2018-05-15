import { Component, OnInit } from '@angular/core';
import {LANGUAGES} from '../../mock/mock-languages';
import { GenericRecord } from '../../class/generic-record';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css', '../app.component.css']
})
export class LanguagesComponent implements OnInit {

  // MOC of Languages
  languages = LANGUAGES;

  // Actions buttons
  genericActions: GenericRecord[] = [
    { id: 1, name: '+', action: 'new'   }
  ];

  constructor() { }

  ngOnInit() {
  }

}
