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
export class ClientService extends TotsBaseHttpService<Client> {
  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient
  ) {
    super(config, http);
  }

  getClient(): Observable<any> {
    const data = {};
    return this.http.post(`${API_BASE_URL}/client/list`, data);
  }
}
