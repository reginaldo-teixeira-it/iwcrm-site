import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, EMPTY, Observable } from 'rxjs'
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user';

const DEV = 'https://localhost:7234/v1/account/';
const PRD = 'https://iwcrm.azurewebsites.net//v1/account/';
const USR_API = PRD;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient,
    @Inject('LOCALSTORAGE') private localStorage: Storage) {
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(USR_API + 'get-all', httpOptions);
  }
}
