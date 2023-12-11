import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Option } from 'src/app/models/Option';
import { MtgService } from 'src/app/services/mtg.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterForm!: FormGroup
  blockOptions: Option[] = [
    {
      label: 'Amonkhet',
      value: 'Amonkhet'
    },
    {
      label: 'Ixalan',
      value: 'Ixalan'
    },
    {
      label: 'Zendikar',
      value: 'Zendikar'
    },
    {
      label: 'Ravnica',
      value: 'Ravnica'
    },
    {
      label: 'Onslaught',
      value: 'Onslaught'  
    },
  ] 
  
  constructor(private fb: FormBuilder, private mtgService: MtgService){}
  
  ngOnInit() {
    this.filterForm = this.fb.group({
      name: [''],
      block: ['', Validators.required] 
    });
  }

  searchSets(){ 
    const block = this.filterForm.controls['block'].value
    const name = this.filterForm.controls['name'].value
    if(!block) return

    const queryParam = name ? `${name}|${block}` : block
    
    this.mtgService.showSpinner()
    this.mtgService.getSets(queryParam).subscribe(res => {
      return this.mtgService.setsResponseSubject.next(res.body || { sets: [] });
    }, (error) => {
      console.log(error)
    }, () => this.mtgService.hideSpinner())
  }
}
