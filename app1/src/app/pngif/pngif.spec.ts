import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pngif } from './pngif';

describe('Pngif', () => {
  let component: Pngif;
  let fixture: ComponentFixture<Pngif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pngif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pngif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
