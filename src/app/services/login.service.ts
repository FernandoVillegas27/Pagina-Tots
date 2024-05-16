import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  TOTS_CORE_PROVIDER,
  TotsBaseHttpService,
  TotsCoreConfig,
} from '@tots/core';
import { API_BASE_URL } from '../../../api-config';
import { Login } from '../entities/client';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends TotsBaseHttpService<Login> {
  constructor(
    @Inject(TOTS_CORE_PROVIDER) protected override config: TotsCoreConfig,
    protected override http: HttpClient
  ) {
    super(config, http);
  }

  login(email: string, password: string): Observable<any> {
    const data = { email, password };
    return this.http.post(`${API_BASE_URL}/mia-auth/login`, data);
  }
}
