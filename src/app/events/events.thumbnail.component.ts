import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-thumbnail',
    templateUrl: './events-thumbnail.component.html',
    styles: [`
        .green {color: #003300 !Important}
        .blue {color: #001230 !Important}
        .bold {font-weight: bold !Important}
        .thumbnail {min-height: 210px;}
        .pad-left {margin: 10px;}
        .well div {color: #bbb;}
    `]
})
export class EventsThumbnailComponent {
    @Input() event: any ;
    getClass() {
        if (this.event.time === '8:00 am') {
            return 'green bold';
        } else if (this.event.time === '10:00 am') {
            return 'blue bold';
        }
        return '';

    }
}
