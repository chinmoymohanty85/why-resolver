import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsWithResolverComponent } from './results-with-resolver.component';

describe('ResultsWithResolverComponent', () => {
  let component: ResultsWithResolverComponent;
  let fixture: ComponentFixture<ResultsWithResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsWithResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsWithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
