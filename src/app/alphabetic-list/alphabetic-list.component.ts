import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GenericRecord } from '../../class/generic-record';
import { constants } from 'os';

@Component({
  selector: 'app-alphabetic-list',
  templateUrl: './alphabetic-list.component.html',
  styleUrls: ['./alphabetic-list.component.css']
})
export class AlphabeticListComponent implements OnInit {

  @Input() genericList: GenericRecord[];
  @Output() eventSelect = new EventEmitter<GenericRecord>();

  letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

  constructor() {
   }

  ngOnInit() {
    this.genericList.sort(GenericRecord.sortByName);
  }

  getRecordsByLetter(letter: string): GenericRecord[] {
    let findLetter = false;
    const genericListByLetter: GenericRecord[] = [];

    for (const genericRecord of this.genericList ) {
      if (genericRecord.name.substring(0, 1).toLowerCase() === letter) {
        genericListByLetter.push(genericRecord);
        findLetter = true;
      } else {
        if (findLetter) {
          break;
        }
      }
    }
    return genericListByLetter;
  }

  selectItem(genericRecord: GenericRecord) {
    this.eventSelect.emit(genericRecord);
  }
}
