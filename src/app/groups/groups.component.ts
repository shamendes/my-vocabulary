import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GROUPS } from '../../mock/mock-groups';
import { GenericRecord } from '../../class/generic-record';
import { Group } from '../../class/group';
import { Language } from '../../class/language';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css', '../app.component.css']
})
export class GroupsComponent implements OnInit {

  @Input() language: Language;
  @Output() eventSelect = new EventEmitter<Group>();

  // MOCK of groups
  groups = GROUPS;

  // Actions buttons
  genericActions: GenericRecord[] = [
    { id: 1, name: '+', action: 'new'   }
  ];

  constructor() { }

  ngOnInit() {
  }


  add(genericRecord: GenericRecord) {
    const newGroup = new Group;

    newGroup.id = genericRecord.id;
    newGroup.name = genericRecord.name;
    newGroup.language = this.language;
    this.groups.push(newGroup);
  }

  remove(genericRecord: GenericRecord) {
    let indexGroupFound: number;

    indexGroupFound = this.groups.findIndex( findGroup => findGroup.id === genericRecord.id);
    if (indexGroupFound >= 0) {
      this.groups.splice(indexGroupFound, 1);
    }
  }

  update(genericRecord: GenericRecord) {
    let indexGroupFound: number;

    indexGroupFound = this.groups.findIndex( findGroup => findGroup.id === genericRecord.id);
    if (indexGroupFound >= 0) {
      this.groups[indexGroupFound].name = genericRecord.name;
    }
  }

  select(genericRecord: GenericRecord) {
    let indexGroupFound: number;

    indexGroupFound = this.groups.findIndex( findGroup => findGroup.id === genericRecord.id);
    if (indexGroupFound >= 0) {
      this.eventSelect.emit(this.groups[indexGroupFound]);
    }
  }

}
