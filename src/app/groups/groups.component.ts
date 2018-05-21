import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GenericRecord } from '../../class/generic-record';
import { Group } from '../../class/group';
import { Language } from '../../class/language';
import { GroupService} from '../_services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css', '../app.component.css']
})
export class GroupsComponent implements OnInit {

  @Input() language: Language;
  @Output() eventSelect = new EventEmitter<Group>();

  groups: Group[];

  // Actions buttons
  genericActions: GenericRecord[] = [
    { id: 1, name: '+', action: 'new'   }
  ];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe(groups => this.groups = groups);
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
