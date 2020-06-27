import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersWithResolverComponent } from './orders-with-resolver.component';

describe('OrdersWithResolverComponent', () => {
  let component: OrdersWithResolverComponent;
  let fixture: ComponentFixture<OrdersWithResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersWithResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersWithResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
