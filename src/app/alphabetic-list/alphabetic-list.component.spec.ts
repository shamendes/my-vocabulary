import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticListComponent } from './alphabetic-list.component';

describe('AlphabeticListComponent', () => {
  let component: AlphabeticListComponent;
  let fixture: ComponentFixture<AlphabeticListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphabeticListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabeticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
