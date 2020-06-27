import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAsyncRxComponent } from './results-async-rx.component';

describe('ResultsAsyncRxComponent', () => {
  let component: ResultsAsyncRxComponent;
  let fixture: ComponentFixture<ResultsAsyncRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsAsyncRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsAsyncRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
