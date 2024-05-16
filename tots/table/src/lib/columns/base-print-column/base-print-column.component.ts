import { Component, Input, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TotsActionTable } from '../../entities/tots-action-table';
import { TotsColumn } from '../../entities/tots-column';

@Component({
  selector: 'tots-base-print-column',
  templateUrl: './base-print-column.component.html',
  styleUrls: ['./base-print-column.component.css']
})
export class BasePrintColumnComponent {

  @Input() column!: TotsColumn;
  @Input() item: any;
  @Input() onAction!: Subject<TotsActionTable>;
  @Input() index?: number;

  constructor(
    protected viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    const view = this.viewContainerRef.createComponent(this.column.component);
    (<any>view.instance).column = this.column;
    (<any>view.instance).item = this.item;
    (<any>view.instance).onAction = this.onAction;
    (<any>view.instance).index = this.index;
  }
}
