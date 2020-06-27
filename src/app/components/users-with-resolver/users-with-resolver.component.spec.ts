import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithResolverComponent } from './users-with-resolver.component';

describe('UsersWithResolverComponent', () => {
  let component: UsersWithResolverComponent;
  let fixture: ComponentFixture<UsersWithResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersWithResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
