import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsConstmersComponent } from './bills-constmers.component';

describe('BillsConstmersComponent', () => {
  let component: BillsConstmersComponent;
  let fixture: ComponentFixture<BillsConstmersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillsConstmersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsConstmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
