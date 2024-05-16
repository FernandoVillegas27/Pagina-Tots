import { HttpHeaders } from '@angular/common/http';
export const API_BASE_URL = 'https://agency-coda.uc.r.appspot.com';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
    'Postman-Token': '<calculated when request is sent>',
    'Content-Length': '<calculated when request is sent>',
    Host: '<calculated when request is sent>',
    'User-Agent': 'http://localhost:4200',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    Connection: 'keep-alive',
    Authorization: 'authkey',
    'Content-Type': 'application/json',
  }),
};
