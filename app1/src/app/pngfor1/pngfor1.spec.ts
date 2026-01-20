import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pngfor1 } from './pngfor1';

describe('Pngfor1', () => {
  let component: Pngfor1;
  let fixture: ComponentFixture<Pngfor1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pngfor1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pngfor1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
