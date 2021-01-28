import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproducttobillComponent } from './addproducttobill.component';

describe('AddproducttobillComponent', () => {
  let component: AddproducttobillComponent;
  let fixture: ComponentFixture<AddproducttobillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproducttobillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproducttobillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
