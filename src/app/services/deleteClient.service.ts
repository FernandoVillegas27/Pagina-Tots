import { Inject, Injectable } from '@angular/core';
import { Client } from '../entities/client';
import { HttpClient } from '@angular/common/http';
import {
  TOTS_CORE_PROVIDER,
  TotsBaseHttpService,
  TotsCoreConfig,
} from '@tots/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'api-config';

@Injectable({
  providedIn: 'root',
})
export class DeleteClientService extends TotsBaseHttpService<Client> {
  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient
  ) {
    super(config, http);
  }

  deleteClient(id: number): Observable<object> {
    return this.http.delete(`${API_BASE_URL}/client/remove/${id}`);
  }
}
