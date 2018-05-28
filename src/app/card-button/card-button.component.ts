import { Component, EventEmitter, OnInit, Input, Output, AfterViewChecked, ViewChild, ElementRef} from '@angular/core';
import {GenericRecord} from '../../class/generic-record';
import { element } from 'protractor';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.css']
})
export class CardButtonComponent implements OnInit, AfterViewChecked  {

  @Input() genericRecord: GenericRecord;
  @Output() eventAdd = new EventEmitter<GenericRecord>();
  @Output() eventRemove = new EventEmitter<GenericRecord>();
  @Output() eventUpdate = new EventEmitter<GenericRecord>();
  @Output() eventSelect = new EventEmitter<GenericRecord>();
  @ViewChild('inputCard') inputCard: ElementRef ;

  myInput;
  // Control for click in multiples objects and only do one action
  firstAction = true;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked() {
    if (this.inputCard) {
      this.inputCard.nativeElement.focus();
    }
  }


  isAction(): boolean {
    return(this.genericRecord.action !== '');
  }

  doAction(): void {
    switch (this.genericRecord.action) {
      case '' : this.doSelect();
                break;
      case 'new': this.doNew();
                  break;
    }
    this.firstAction = true;
  }

  private doNew(): void {
    if (this.executeAction()) {
      if (!this.myInput) {
        this.myInput = {value: ''};
      }
    }
  }

  private doSelect() {
    if (this.executeAction() && !this.myInput) {
      this.eventSelect.emit(this.genericRecord);
    }
  }


  cancelNew(): void {
    if (this.executeAction()) {
      this.myInput = null;
    }
  }

  saveNew() {
      if (this.executeAction()) {
        const newGenericRecord: GenericRecord = {id: -1, name: this.myInput.value, action: ''};
        this.eventAdd.emit(newGenericRecord);
        this.myInput = null;
      }
  }

  update() {
    if (this.executeAction()) {
      this.genericRecord.name = this.myInput.value;
      this.eventUpdate.emit(this.genericRecord);
      this.myInput = null;
    }
  }

  remove() {
    if (this.executeAction()) {
      if ( confirm('Remove item?')) {
      this.eventRemove.emit(this.genericRecord);
      }
    }
  }

  edit() {
    if (this.executeAction()) {
      this.myInput = {value: this.genericRecord.name};
    }
  }

  onKeyUp(event) {
    const keyCode = event.which || event.keyCode;

    switch (keyCode) {
      case 27: // Tecla ESC
          this.cancelNew();
          this.firstAction = true;
        break;
      case 13: // Tecla ENTER
        if (this.genericRecord.action === 'new') {
            this.saveNew();
            this.firstAction = true;
        } else {
            this.update();
            this.firstAction = true;
        }
        break;
      default:
        return;
    }
  }


  private executeAction(): boolean {
    if (this.firstAction) {
      this.firstAction = false;
      return true;
    } else {
      this.firstAction = true;
      return false;
    }
  }


}
