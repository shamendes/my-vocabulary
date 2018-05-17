import { Component, OnInit } from '@angular/core';
import {LANGUAGES} from '../../mock/mock-languages';
import { GenericRecord } from '../../class/generic-record';
import { Language } from '../../class/language';

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

  add(genericRecord: GenericRecord){
    let newLanguage: Language ={id: genericRecord.id, name: genericRecord.name, asGenericRecord(): GenericRecord {
      const genericRecord: GenericRecord = {
          id: this.id,
          name: this.name,
          action: ''
      };

      return (genericRecord);
      }
    }
    this.languages.push(newLanguage);
  }

  remove(genericRecord: GenericRecord){
    for(let index = 0; index < this.languages.length; index++){
      if(this.languages[index].id==genericRecord.id) 
        this.languages.splice(index,1);
    }   
  }

  update(genericRecord: GenericRecord){
    for(let index = 0; index < this.languages.length; index++){
      if(this.languages[index].id==genericRecord.id) 
        this.languages[index].name = genericRecord.name;
    }       
  }

}
