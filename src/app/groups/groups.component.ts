import { Component, OnInit, Input } from '@angular/core';
import { GROUPS } from '../../mock/mock-groups';
import { GenericRecord } from '../../class/generic-record';
import { Group } from '../../class/group';
import { Language } from '../../class/language';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  @Input() language: Language;

  groups = GROUPS;

  // Actions buttons
  genericActions: GenericRecord[] = [
    { id: 1, name: '+', action: 'new'   }
  ];

  constructor() { }

  ngOnInit() {
  }


  add(genericRecord: GenericRecord){
    let newGroup: Group ={id: genericRecord.id, name: genericRecord.name, language: this.language, asGenericRecord(): GenericRecord {
      const genericRecord: GenericRecord = {
          id: this.id,
          name: this.name,
          action: ''
      };

      return (genericRecord);
      }
    }
    this.groups.push(newGroup);
  }

  remove(genericRecord: GenericRecord){
    for(let index = 0; index < this.groups.length; index++){
      if(this.groups[index].id==genericRecord.id) 
        this.groups.splice(index,1);
    }   
  }

  update(genericRecord: GenericRecord){
    for(let index = 0; index < this.groups.length; index++){
      if(this.groups[index].id==genericRecord.id) 
        this.groups[index].name = genericRecord.name;
    }       
  }

}
