import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPersonnelComponent } from './new-personnel.component';

describe('NewPersonnelComponent', () => {
  let component: NewPersonnelComponent;
  let fixture: ComponentFixture<NewPersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
