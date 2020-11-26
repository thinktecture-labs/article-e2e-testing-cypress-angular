import {NgModule} from '@angular/core';
import {ButtonComponent} from './components/button/button.component';
import {BadgeComponent} from './components/badge/badge.component';
import {DockComponent} from './components/dock/dock.component';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [ButtonComponent, BadgeComponent, DockComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule],
  exports: [ButtonComponent, BadgeComponent, DockComponent],
})
export class CoreModule {
}
