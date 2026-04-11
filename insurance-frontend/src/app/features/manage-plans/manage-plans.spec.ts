import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlans } from './manage-plans';

describe('ManagePlans', () => {
  let component: ManagePlans;
  let fixture: ComponentFixture<ManagePlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePlans]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
