import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpersonComponent } from './person.component';

describe('AddpersonComponent', () => {
  let component: AddpersonComponent;
  let fixture: ComponentFixture<AddpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
