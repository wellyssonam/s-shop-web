import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerService } from './services/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {

  constructor(private spinnerService: SpinnerService) { }

  showSpinner() {
    return this.spinnerService.startLoading$;
  }
}
