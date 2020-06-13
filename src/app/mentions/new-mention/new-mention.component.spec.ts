import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMentionComponent } from './new-mention.component';

describe('NewMentionComponent', () => {
  let component: NewMentionComponent;
  let fixture: ComponentFixture<NewMentionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMentionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
