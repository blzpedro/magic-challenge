import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostersComponent } from './boosters.component';

describe('BoostersComponent', () => {
  let component: BoostersComponent;
  let fixture: ComponentFixture<BoostersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoostersComponent]
    });
    fixture = TestBed.createComponent(BoostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
