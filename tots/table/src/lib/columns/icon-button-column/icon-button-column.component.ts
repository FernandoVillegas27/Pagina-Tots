import { Component } from '@angular/core';
import { TotsBaseColumnComponent } from '../tots-base-column.component';

@Component({
  selector: 'tots-icon-button-column',
  templateUrl: './icon-button-column.component.html',
  styleUrls: ['./icon-button-column.component.css']
})
export class IconButtonColumnComponent extends TotsBaseColumnComponent {

  clickButton($event: UIEvent) {
    this.onAction.next({ key: this.column.extra.action, item: this.item });
    $event.stopPropagation();
    return false;
  }

  getIconName() : string {
    return this.column.extra.icon;
  }

  getButtonColor() : string {
    return this.column.extra.matColor;
  }

  getClasses() : string {
    return this.column.extra.class;
  }
}
