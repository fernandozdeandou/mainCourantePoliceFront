import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEvenementComponent } from './new-evenement.component';

describe('NewEvenementComponent', () => {
  let component: NewEvenementComponent;
  let fixture: ComponentFixture<NewEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
