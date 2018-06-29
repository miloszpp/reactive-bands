import { Component } from '@angular/core';
import { BandDataService } from './band-data.service';
import { ToastrService } from 'ngx-toastr';
import { bufferTime, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    bandDataService: BandDataService,
    toastr: ToastrService
  ) {
    bandDataService.getUpdates().pipe(
      bufferCount(5),
    ).subscribe(
      bands => {
        const bandNames = bands.map(b => b.name).join(', ');
        toastr.info(`The following bands have been updated: ${bandNames}`);
      }
    );
  }
}
