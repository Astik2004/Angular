import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formg } from './formg';

describe('Formg', () => {
  let component: Formg;
  let fixture: ComponentFixture<Formg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
