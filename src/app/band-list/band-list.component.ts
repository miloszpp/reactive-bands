import { Component } from '@angular/core';

import { BandDataService } from '../band-data.service';
import { Band } from '../model';

@Component({
  selector: 'app-band-list',
  templateUrl: 'band-list.component.html'
})
export class BandListComponent {
  bandList: Band[];

  constructor(private bandDataService: BandDataService) {
    this.bandDataService.getBands().subscribe(bands => {
      this.bandList = bands;
    });
  }
}
