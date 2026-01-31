import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToError } from './go-to-error';

describe('GoToError', () => {
  let component: GoToError;
  let fixture: ComponentFixture<GoToError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoToError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
