import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequerentComponent } from './requerent.component';

describe('RequerentComponent', () => {
  let component: RequerentComponent;
  let fixture: ComponentFixture<RequerentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequerentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequerentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
