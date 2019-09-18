import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector : 'pm-root',
  template:  `
    <navbar></navbar>
    <events-list></events-list>
    `,
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  page = 'app-product';
}
