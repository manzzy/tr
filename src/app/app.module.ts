import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events.thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
