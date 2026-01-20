import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pngfor } from './pngfor';

describe('Pngfor', () => {
  let component: Pngfor;
  let fixture: ComponentFixture<Pngfor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pngfor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pngfor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
