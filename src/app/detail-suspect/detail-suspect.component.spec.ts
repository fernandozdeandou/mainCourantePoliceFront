import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSuspectComponent } from './detail-suspect.component';

describe('DetailSuspectComponent', () => {
  let component: DetailSuspectComponent;
  let fixture: ComponentFixture<DetailSuspectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSuspectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSuspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
