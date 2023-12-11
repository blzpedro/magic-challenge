import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MtgService } from 'src/app/services/mtg.service';
import { AngularMaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Sets } from 'src/app/models/Sets';
import { HttpResponse } from '@angular/common/http';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      imports: [HttpClientTestingModule, AngularMaterialModule, ReactiveFormsModule],
      providers: [MtgService]
    });
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT search if block form control is invalid', () => {
    spyOn(component.mtgService, 'getSets');
    const blockFormControl = component.filterForm.controls['block']
    blockFormControl.setValue(null)

    component.searchSets();
    
    expect(blockFormControl.invalid).toBeTruthy();
    expect(component.mtgService.getSets).not.toHaveBeenCalled();
  })

  it('should search if block form control is valid', () => {
    const mockSetsResponse: HttpResponse<Sets> = new HttpResponse({ body: { sets: [] } });
    spyOn(component.mtgService, 'getSets').and.returnValue(of(mockSetsResponse));
    const blockFormControl = component.filterForm.controls['block']
    blockFormControl.setValue(component.blockOptions[0])

    component.searchSets();
    
    expect(blockFormControl.invalid).toBeFalsy();
    expect(component.mtgService.getSets).toHaveBeenCalled();
  })
});
