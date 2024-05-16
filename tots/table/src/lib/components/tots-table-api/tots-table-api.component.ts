import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { TotsListResponse } from '@tots/core';
import { Observable } from 'rxjs';
import { TotsActionTable } from '../../entities/tots-action-table';
import { TotsTableApiConfig } from '../../entities/tots-table-api-config';
import { TotsTableConfig } from '../../entities/tots-table-config';
import { TotsTableComponent } from '../tots-table/tots-table.component';

@Component({
  selector: 'tots-table-api',
  templateUrl: './tots-table-api.component.html',
  styleUrls: ['./tots-table-api.component.scss']
})
export class TotsTableApiComponent implements OnInit {
  
  @ViewChild('tableComp') tableComp!: TotsTableComponent;

  @Input() config = new TotsTableApiConfig();
  @Input() hasPagination: boolean = true;
  @Input() isPaginationStartIndexInZero: boolean = false;

  @Output() onAction = new EventEmitter<TotsActionTable>();

  configTable = new TotsTableConfig();

  ngOnInit(): void {
    this.loadConfig();
  }

  onTableAction(action: TotsActionTable) {
    if(action.key == 'page-change'){
      this.config.query.per_page = 100;
      if(this.isPaginationStartIndexInZero){
        this.config.query.page = action.item.pageIndex;
      } else {
        this.config.query.page = action.item.pageIndex + 1;
      }
      this.configTable.obs = this.config.service.list(this.config.query);
    }

    this.onAction.emit(action);
  }

  loadConfig() {
    this.configTable.id = this.config.id;
    this.configTable.columns = this.config.columns;
    this.configTable.obs = this.config.service.list(this.config.query);
    this.configTable.classes = this.config.classes;
  }

  refreshQueryAndLoadItems() {
    this.configTable.obs = this.config.service.list(this.config.query);
    return this.loadItems();
  }

  loadItems() {
    return this.tableComp.loadItems();
  }

  getDataItems(): TotsListResponse<any> | undefined {
    return this.tableComp.getDataItems();
  }

  setObs(obs: Observable<TotsListResponse<any>>) {
    this.configTable.obs = obs;
  }
}
