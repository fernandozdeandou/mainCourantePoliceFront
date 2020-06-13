import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSuspectComponent } from './new-suspect.component';

describe('NewSuspectComponent', () => {
  let component: NewSuspectComponent;
  let fixture: ComponentFixture<NewSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
