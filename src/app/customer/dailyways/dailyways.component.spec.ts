import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailywaysComponent } from './dailyways.component';

describe('DailywaysComponent', () => {
  let component: DailywaysComponent;
  let fixture: ComponentFixture<DailywaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailywaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailywaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
