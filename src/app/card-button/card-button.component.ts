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
  @Input() height: number;
  @Input() width: number;
  @Output() onAdd = new EventEmitter<GenericRecord>();
  @Output() onRemove = new EventEmitter<GenericRecord>();
  @Output() onUpdate = new EventEmitter<GenericRecord>();
  @ViewChild('inputCard') inputCard: ElementRef ;

  myInput;
  flagCancelNew = false;
  flagOnOver =false;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewChecked(){
    if(this.inputCard)
      this.inputCard.nativeElement.focus();
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
    if(this.flagCancelNew)
    {
      this.flagCancelNew = false;
      return;
    }

    if (!this.myInput) {  
      this.myInput = {value: ''};
      this.teste();
    } 
  }

  cancelNew(): void {
    this.myInput = null;
    this.flagCancelNew = true;
  }

  saveNew(){
      let newGenericRecord: GenericRecord = {id: -1, name: this.myInput.value, action: ''};
      this.onAdd.emit(newGenericRecord);
      this.myInput = null;
  }

  update(){
    this.genericRecord.name = this.myInput.value;
    this.onUpdate.emit(this.genericRecord);
    this.myInput = null;
  }

  remove(){
    if( confirm("Remove item?"))
     this.onRemove.emit(this.genericRecord);
  }

  edit(){
    this.myInput = {value: this.genericRecord.name};
  }

  onKeyUp(event){
    let keyCode = event.which || event.keyCode;

    switch(keyCode) {
      case 27: //Tecla ESC
        this.cancelNew();
        break;
      case 13: //Tecla ENTER
        if(this.genericRecord.action == 'new')
          this.saveNew();
        else
          this.update();
        break;
      default:
        return;
    }
  }

  keepFlagOnOver(value)
  {
    this.flagOnOver = value;
  }

  showMoreActions()
  {
    return (this.flagOnOver && this.myInput == null && this.genericRecord.action=='');
  }

  teste()
  {

  }


}
