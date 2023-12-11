import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BoostersComponent } from './components/boosters/boosters.component';
import { SetsComponent } from './components/sets/sets.component';
import { FilterComponent } from './components/filter/filter.component';
import { AngularMaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MtgService } from './services/mtg.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mtgService: MtgService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, AngularMaterialModule, ReactiveFormsModule],
      declarations: [
        AppComponent, 
        FilterComponent,
        SetsComponent,
        BoostersComponent
      ],
      providers: [MtgService]
    })
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mtgService = TestBed.inject(MtgService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'magic-challenge'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('magic-challenge');
  });

  it('should display spinner when spinnerVisibility$ is true', () => {
    mtgService.spinnerVisibleSubject.next(true);

    fixture.detectChanges();

    const spinnerElement = document.getElementById('spinner')
    expect(spinnerElement).toBeTruthy();
  });

  it('should not display spinner when spinnerVisibility$ is false', () => {
    mtgService.spinnerVisibleSubject.next(false);

    fixture.detectChanges();

    const spinnerElement = document.getElementById('spinner')
    expect(spinnerElement).toBeFalsy();
  });
});
