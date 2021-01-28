import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersummeryComponent } from './ordersummery.component';

describe('OrdersummeryComponent', () => {
  let component: OrdersummeryComponent;
  let fixture: ComponentFixture<OrdersummeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersummeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
