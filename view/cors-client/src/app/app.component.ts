import { Component, Inject } from '@angular/core';
import { CtlService } from './ctl.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cors-client'
  ctlService: CtlService

  constructor(@Inject(CtlService) ctlService: CtlService) {
   this.ctlService = ctlService
   this.ctlService.getApiResult()
  }
}
