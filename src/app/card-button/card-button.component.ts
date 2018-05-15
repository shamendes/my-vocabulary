import { Component, OnInit, Input } from '@angular/core';
import {GenericRecord} from '../../class/generic-record';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit {

  @Input() genericRecord: GenericRecord;
  @Input() height: number;
  @Input() width: number;

  inputNew;
  inputNewNothing;
  flagCancelNew = false;

  constructor() { }

  ngOnInit() {
  }

  isAction(): boolean {
    return(this.genericRecord.action !== '');
  }

  doAction(): void {
    switch (this.genericRecord.action) {
      case '' : return;
      case 'new': this.doNew();
                  break;
    }
  }

  private doNew(): void {
    if (!this.inputNew && !this.flagCancelNew) {
      this.inputNew = {value: ''};
    } else {
      this.flagCancelNew = false;
    }
  }

  cancelNew(): void {
    this.inputNew = this.inputNewNothing;
    this.flagCancelNew = true;
  }

}
