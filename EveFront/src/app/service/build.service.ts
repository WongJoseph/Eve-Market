import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BuildService {

  constructor(private http: HttpClient) { }

  getBuild() {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.get<any>('http://localhost:8080/getBuild', options).subscribe(res => console.log(res));
  }

}
