import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { interval } from 'rxjs/observable/interval';
import { delay, tap, map } from 'rxjs/operators';

import { Band } from './model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BandDataService {

  private bands: Band[] = [
    { 
      id: '96fafcd8-a7d5-40ed-8252-8111bc081dff', 
      name: 'Metallica', 
      bio: 'Metallica was formed by Lars Ulrich and James Hetfield in the fall of 1981.',
      formationYear: 1981,
      isActive: true
    },
    { 
      id: '133cfef7-6f96-40fe-86a1-c7ca9c5cbd4e', 
      name: 'Slayer', 
      bio: 'Slayer was formed in 1981 by Los Angeles schoolmates and guitarists Jeff Hanneman and Kerry King.',
      formationYear: 1981,
      isActive: true
    },
    { 
      id: 'a2a6c014-35e7-478f-b4a1-fc83dcfe811a', 
      name: 'Soundgarden', 
      bio: 'By many, Soundgarden are often considered the fathers of the "alternative metal" and "grunge" genres.',
      formationYear: 1984,
      isActive: false
    },
  ];

  constructor() { }

  getBands(active?: boolean) {
    return of([ 
      ...this.bands
        .map(band => ({ ...band }))
        .filter(band => active === undefined ? true : band.isActive === active)
    ]).pipe(
      tap(() => console.log('Fetching data started')),
      delay(1000),
      // map(() => { throw "aaaa"; }), // uncomment for errors
      tap(() => console.log('Fetching data finished')),
    );
  }

  searchBands(queryString: string) {
    return of(
      this.bands.filter(b => 
        queryString && queryString.length > 0 
          ? b.name.toLowerCase().includes(queryString.toLowerCase())
          : false
      )
    ).pipe(
      tap(() => console.log('Fetching data started')),
      delay(1000),
      tap(() => console.log('Fetching data finished')),
    );
  }

  updateIsActive(id: string, isActive: boolean) {
    console.log(`Setting isActive to ${isActive} for band with id ${id}`);
    const band = this.bands.find(band => band.id === id);
    band.isActive = isActive;
    return of({ ...band }).pipe(
      delay(1000)
    );
  }

  getUpdates(): Observable<Band> {
    return interval(50000).pipe(
      map(() => this.bands[Math.floor(Math.random() * this.bands.length)]),
      tap(band => console.log(`Received update for ${band.name}`))
    );
  }

}
