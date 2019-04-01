import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable , of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  private url = 'http://localhost:3000';

  private userId: any;
  private isLogIn: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<any> {
    return this.http.get(`${this.url}/users`, httpOptions);
  }

  getLists(): Observable<any> {
    return this.http.get(`${this.url}/lists`, httpOptions);
  }

  getListById(): Observable<any> {
    return this.http.get(`${this.url}/lists/${this.userId}`, httpOptions);
  }

  updateListById(list): Observable<any> {
    return this.http.put(`${this.url}/lists/${this.userId}`, {'userList': list}, httpOptions);
  }

  setCurrentUserId(id) {
    this.userId = id;
  }

  getCurrentUserId() {
    return this.userId;
  }

  logIn() {
    this.isLogIn = true;
  }

  isLoggedIn() {
    return this.isLogIn;
  }
}
