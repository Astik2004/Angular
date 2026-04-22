import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoan } from './view-loan';

describe('ViewLoan', () => {
  let component: ViewLoan;
  let fixture: ComponentFixture<ViewLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLoan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
