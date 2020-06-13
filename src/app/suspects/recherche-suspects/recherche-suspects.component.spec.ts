import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSuspectsComponent } from './recherche-suspects.component';

describe('RechercheSuspectsComponent', () => {
  let component: RechercheSuspectsComponent;
  let fixture: ComponentFixture<RechercheSuspectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheSuspectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheSuspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
