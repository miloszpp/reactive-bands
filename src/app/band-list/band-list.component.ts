import { Component } from '@angular/core';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map, mergeMap, startWith } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  refreshDataClickSubject = new Subject();

  model$: Observable<{ bands: Band[], isLoading: boolean }>;

  constructor(private bandDataService: BandDataService) {
    const refreshDataClick$ = this.refreshDataClickSubject.asObservable();
    const refreshTrigger$ = refreshDataClick$.pipe(
      startWith({})
    );
    const bandList$ = refreshTrigger$.pipe(
      mergeMap(() => this.bandDataService.getBands())
    );

    this.model$ = merge(
      refreshTrigger$.pipe(map(() => ({ bands: [], isLoading: true }))),
      bandList$.pipe(map(bands => ({ bands: bands, isLoading: false }))),
    );   
  }
}
