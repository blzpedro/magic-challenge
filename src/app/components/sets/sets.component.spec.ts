import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetsComponent } from './sets.component';
import { MtgService } from 'src/app/services/mtg.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sets } from 'src/app/models/Sets';
import { BehaviorSubject, Subject, of } from 'rxjs';
import { AngularMaterialModule } from 'src/app/material.module';
import { HttpResponse } from '@angular/common/http';
import { Booster } from 'src/app/models/Booster';
import { BoostersComponent } from '../boosters/boosters.component';
import { mockBoosterResponse, mockedSets } from './mock';

describe('SetsComponent', () => {
  let component: SetsComponent;
  let fixture: ComponentFixture<SetsComponent>;
  let mtgService: MtgService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetsComponent, BoostersComponent],
      imports: [HttpClientTestingModule, AngularMaterialModule],
      providers: [MtgService, MatSnackBar]
    });
    fixture = TestBed.createComponent(SetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mtgService = TestBed.inject(MtgService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle sets through filter subject response', () => {
    mtgService.setsResponseSubject.next(mockedSets);

    component.handleSets();

    expect(component.creatureCards).toEqual([]);
    expect(component.setsList).toEqual(mockedSets.sets);
    expect(component.setsList?.length).toBe(4);
  });

  it('should show empty results message if sets is empty', () => {
    mtgService.setsResponseSubject.next({sets: []});

    component.handleSets();
    fixture.detectChanges();

    const emptyMessage = fixture.nativeElement.querySelector('#empty-results');
    expect(emptyMessage).toBeTruthy()
  });

  it('should show some content if sets is NOT empty', () => {
    mtgService.setsResponseSubject.next(mockedSets);

    component.handleSets();
    fixture.detectChanges();

    const setsResults = fixture.nativeElement.querySelector('#sets-results');
    const setsResultsText = setsResults.innerText;
    expect(setsResultsText).toContain('Amonkhet');
  });

  it('should not show boosters', () => {
    const boostersResult = fixture.nativeElement.querySelector('#boosters-results');
    expect(boostersResult).toBeFalsy()
  });

  it('should click and get boosters by choosed set', () => {
    mtgService.setsResponseSubject.next(mockedSets);
    component.handleSets();

    fixture.detectChanges();
    document.getElementById(`set-${0}`)?.click()

    setTimeout(() => {
      fixture.detectChanges();
      const spy = spyOn(component, 'getBoosterBySet');
      expect(spy).toHaveBeenCalled();
    }, 500);
  });

  it('should choose some set and show boosters component when cards hit 30 creatures', () => {
    mtgService.setsResponseSubject.next(mockedSets);
    component.handleSets();

    const boosterResponse: HttpResponse<Booster> = new HttpResponse({ body: mockBoosterResponse });
    spyOn(component.mtgService, 'getBoosterBySetId').and.returnValue(of(boosterResponse));
    fixture.detectChanges();
    document.getElementById(`set-${0}`)?.click()

    expect(component.mtgService.getBoosterBySetId).toHaveBeenCalled();
    fixture.detectChanges();

    const boostersResult = fixture.nativeElement.querySelector('#boosters-results');
    expect(boostersResult).toBeTruthy()
    expect(component.creatureCards.length).toBe(30)

    const setsResults = fixture.nativeElement.querySelector('#sets-results');
    expect(setsResults).toBeFalsy()
  });

  it('should NOT show cards if its < than 30 creatures', () => {
    mtgService.setsResponseSubject.next(mockedSets);
    component.handleSets();
    component.creatureCards = [mockBoosterResponse.cards[0]]
    fixture.detectChanges();

    expect(component.creatureCards.length).toBe(1)

    const setsResults = fixture.nativeElement.querySelector('#sets-results');
    expect(setsResults).toBeTruthy()

    const boostersResult = fixture.nativeElement.querySelector('#boosters-results');
    expect(boostersResult).toBeFalsy()
  });
});
