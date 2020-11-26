import {Component, Input} from '@angular/core';

export interface Item {
  icon?: string;
  value?: number;
}

@Component({
  selector: 'labs-dock',
  templateUrl: 'dock.component.html',
  styleUrls: ['dock.component.scss'],
})

export class DockComponent {
  @Input() items: Item[] = [];
}
