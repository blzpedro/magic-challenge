import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostersComponent } from './boosters.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MtgService } from 'src/app/services/mtg.service';
import { AngularMaterialModule } from 'src/app/material.module';
import { mockBoosterResponse } from '../sets/mock';

describe('BoostersComponent', () => {
  let component: BoostersComponent;
  let fixture: ComponentFixture<BoostersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoostersComponent],
      imports: [HttpClientTestingModule, AngularMaterialModule],
      providers: [MtgService]
    });
    fixture = TestBed.createComponent(BoostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive cards through input and render them', () => {
    component.cards = [mockBoosterResponse.cards[0]]

    fixture.detectChanges()
    const identityImage = document.getElementById('identity-image-0')
    expect(identityImage).toBeTruthy()

    const cardImage = document.getElementById('card-image-0')
    expect(cardImage).toBeTruthy()

    const cardName = document.getElementById('card-name-0')
    expect(cardName).toBeTruthy()

    const cardMana = document.getElementById('card-mana-0')
    expect(cardMana).toBeTruthy()

    const cardText = document.getElementById('card-text-0')
    expect(cardText).toBeTruthy()
  })
});
