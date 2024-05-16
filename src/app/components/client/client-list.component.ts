import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { TotsListResponse } from '@tots/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AddClientService } from 'src/app/services/addClient.service';
import { ClientService } from 'src/app/services/client.service';
import { DeleteClientService } from 'src/app/services/deleteClient.service';
import { UpdateClientService } from 'src/app/services/updateClient.service';
import {
  AvatarPhotoFieldComponent,
  StringFieldComponent,
  SubmitButtonFieldComponent,
  TotsFormModalService,
  TotsModalConfig,
} from 'tots/form/src/public-api';
import {
  TotsTableComponent,
  TotsTableConfig,
  TotsStringColumn,
  TotsMoreMenuColumn,
  TotsMoreMenuItem,
} from 'tots/table/src/public-api';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {
  @ViewChild('tableComp') tableComp!: TotsTableComponent;

  formGroup = new FormGroup({});
  dataLoaded = false;
  config = new TotsTableConfig();
  pageSize = 5;
  pageIndex = 0;
  items: any[] = [];
  editForm!: FormGroup;

  constructor(
    private clientService: ClientService,
    private deleteClientService: DeleteClientService,
    private updateClientService: UpdateClientService,
    protected modalService: TotsFormModalService,
    private addClientService: AddClientService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.configureTable();
    this.initEditForm();
  }

  initEditForm() {
    this.editForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: [''],
      photo: [''],
      caption: [''],
    });
  }

  loadData() {
    this.clientService.getClient().subscribe((data: any) => {
      this.items = data.response.data;
      this.pageIndex = 0;
      this.changePage({
        pageIndex: this.pageIndex,
        previousPageIndex: this.pageIndex,
        pageSize: 0,
        length: 0,
      });
    });
  }

  configureTable() {
    this.config.id = 'table-example';
    this.config.columns = [
      new TotsStringColumn(
        'firstname',
        'firstname',
        'Nombre',
        false,
        undefined,
        ''
      ),
      new TotsStringColumn(
        'lastname',
        'lastname',
        'Apellido',
        false,
        undefined,
        ''
      ),
      new TotsStringColumn('email', 'email', 'E-mail', false, undefined, ''),
      new TotsMoreMenuColumn('more', [
        new TotsMoreMenuItem('edit', 'Editar', 'edit', 'a_css_class'),
        new TotsMoreMenuItem('delete', 'Eliminar', 'delete'),
      ]),
    ];
  }

  onTableAction(action: any) {
    switch (action.key) {
      case 'click-order':
        this.onOrder(action.item);
        break;
      case 'add':
        this.addItemOrEdit();
        break;
      case 'delete':
        this.removeItem(action.item);
        break;
      case 'edit':
        this.addItemOrEdit(action.item);
        break;
      case 'page-change':
        const pageIndex = action.item.pageIndex;
        const pageSize = action.item.pageSize;
        this.pageSize = pageSize;
        this.changePage({
          pageIndex: pageIndex,
          previousPageIndex: pageIndex,
          pageSize: 0,
          length: 0,
        });
        break;
      default:
        console.log('Acción no reconocida:', action.key);
        break;
    }
  }

  onOrder(column: any) {
    let response = new TotsListResponse();
    if (column.order == 'asc') {
      response.data = this.items.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    } else {
      response.data = this.items.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
    }
    this.config.obs = of(response);
    this.tableComp?.loadItems();
  }

  addItemOrEdit(item?: any) {
    let config = new TotsModalConfig();
    config.title = !item ? 'Agregar Cliente' : 'Editar Cliente';
    config.autoSave = true;
    config.item = item || {};
    config.fields = [
      {
        key: 'firstname',
        component: StringFieldComponent,
        label: 'Nombre',
        validators: [Validators.required],
      },
      {
        key: 'lastname',
        component: StringFieldComponent,
        label: 'Apellido',
        validators: [Validators.required],
      },
      {
        key: 'email',
        component: StringFieldComponent,
        label: 'E-mail',
        validators: [Validators.email],
        extra: {
          caption: 'nam@gmail.com',
        },
      },
      {
        key: 'address',
        component: StringFieldComponent,
        label: 'Dirección',
      },
      {
        key: 'photos',
        component: AvatarPhotoFieldComponent,
        label: 'Foto',
      },
      {
        key: 'caption',
        component: StringFieldComponent,
        label: 'Subtitulo',
      },
      { key: 'submit', component: SubmitButtonFieldComponent, label: 'Enviar' },
    ];
    this.openModal(
      config,
      item ? this.editClient.bind(this) : this.addClient.bind(this)
    );
  }

  private openModal(config: TotsModalConfig, callback: (item: any) => void) {
    this.modalService
      .open(config)
      .pipe(
        tap((action) => {
          if (action.key == 'submit') {
            action.modal?.componentInstance.showLoading();
            action.modal?.close();
            callback(action.item);
          }
        }),
        delay(2000),
        tap((action) => action.modal?.componentInstance?.hideLoading())
      )
      .subscribe((action) => {
        console.log(action);
      });
  }

  private addClient(item: any) {
    this.addClientService.addClient(item).subscribe(
      (response) => {
        console.log('Cliente agregado correctamente:', response);
        this.loadData();
      },
      (error) => {
        console.error('Error al agregar el cliente:', error);
      }
    );
  }

  private editClient(item: any) {
    this.updateClientService.updateClient(item).subscribe(
      (response) => {
        console.log('Cliente actualizado correctamente:', response);
        this.loadData();
      },
      (error) => {
        console.error('Error al actualizar el cliente:', error);
      }
    );
  }

  removeItem(item: any) {
    const config = new TotsModalConfig();
    config.title = '¿Estás seguro de que deseas eliminar al cliente?';
    config.autoSave = false;
    config.item = this.items;
    config.fields = [
      { key: 'submit', component: SubmitButtonFieldComponent, label: 'Borrar' },
    ];
    this.modalService
      .open(config)
      .pipe(
        tap((action) => {
          if (action.key == 'submit') {
            action.modal?.componentInstance.showLoading();
            this.deleteClientService.deleteClient(item.id).subscribe(
              (response) => {
                console.log('Cliente eliminado correctamente:', response);
                action.modal?.close();
                const index = this.items.indexOf(item);
                if (index !== -1) {
                  this.items.splice(index, 1);
                }
                const data = new TotsListResponse();
                data.data = this.items.slice(
                  this.pageIndex * this.pageSize,
                  (this.pageIndex + 1) * this.pageSize
                );
                data.total = this.items.length;
                this.config.obs = of(data).pipe(delay(1000));
                this.tableComp?.loadItems();
              },
              (error) => {
                console.error('Error al eliminar el cliente:', error);
              }
            );
          }
        }),
        delay(2000),
        tap((action) => action.modal?.componentInstance?.hideLoading())
      )
      .subscribe((action) => {
        console.log(action);
      });
  }

  private changePage(pageEvent: PageEvent) {
    this.pageIndex = pageEvent.pageIndex;
    const startIndex = pageEvent.pageIndex * this.pageSize;
    const pageItems = this.items.slice(startIndex, startIndex + this.pageSize);
    const data = new TotsListResponse();
    data.data = pageItems;
    data.total = this.items.length;
    this.config.obs = of(data).pipe(delay(1000));
    this.tableComp?.loadItems();
  }
}
