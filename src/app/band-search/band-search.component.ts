import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Band } from '../model';
import { BandDataService } from '../band-data.service';
import { mergeMap, filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-band-search',
  templateUrl: 'band-search.component.html',
  styles: []
})
export class BandSearchComponent {

  search$ = new Subject<string>();
  searchResults$: Observable<Band[]>;

  constructor(bandDataService: BandDataService) {
    this.searchResults$ = this.search$.pipe(
      filter(queryString => queryString.length > 2),
      debounceTime(500),
      mergeMap(bandDataService.searchBands.bind(bandDataService))
    );
  }

}
