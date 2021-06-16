import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropdownList = [
    { item_id: 1, item_text: 'Onshore growth fund lP' },
    { item_id: 2, item_text: 'Offshore Growth Funds LLC' },
    { item_id: 3, item_text: 'Event Driven Fund UK LLC' },
    { item_id: 4, item_text: 'Event Driven Fund US LP' },
    { item_id: 5, item_text: 'Opportunistic Fund LP' },
    { item_id: 5, item_text: 'What the Fund LP' },
    { item_id: 5, item_text: 'Statistical Arb Fund LP' },
    { item_id: 5, item_text: 'Venator Fund LP' },
    { item_id: 5, item_text: 'Venless LLC' },
    { item_id: 5, item_text: 'VenRad LP' },
    { item_id: 5, item_text: 'Infiltrator Fund LLC' },
    { item_id: 5, item_text: 'Supremacy fund LLC' },
    { item_id: 5, item_text: 'Tantive IV Fund LP' },
    { item_id: 5, item_text: 'Tydirium Fund LLC' },
    { item_id: 5, item_text: 'Razor Crest Fund LP' },
    { item_id: 5, item_text: 'Corvus Fund LP' },
    { item_id: 5, item_text: 'Finalizer fund LP' },
    { item_id: 5, item_text: 'Adjudicator Fund LP' },
    { item_id: 5, item_text: 'Virulence Fund LLC' },
    { item_id: 5, item_text: 'Executor Fund LP' },
    { item_id: 5, item_text: 'Sentinel Fund LLC' },
    { item_id: 5, item_text: 'Phantom II Fund LLC' },
    { item_id: 5, item_text: 'Dreadnought V Fund LP' },
    { item_id: 5, item_text: 'The fulminatrix Fund LLC' },
    { item_id: 5, item_text: 'Liberator Fund LLC' },
    { item_id: 5, item_text: 'Triumph Fund LP' }

  ];
  dropdownSettings:IDropdownSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }



}
