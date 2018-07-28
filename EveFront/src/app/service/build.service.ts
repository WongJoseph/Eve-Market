import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Build} from '../domain/build';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Orders} from '../domain/orders';

@Injectable()
export class BuildService {
  private subject = new ReplaySubject<Build[]>();


  constructor(private http: HttpClient) { }

  getBuildFromDB() {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    return this.http.get<Build[]>('http://localhost:8080/getBuild', options).subscribe(resp => this.updateBuild(resp));
  }

  updateBuild(buildList) {
    this.subject.next(buildList);
  }

  getBuild(): Observable<any> {
    return this.subject.asObservable();
  }


  saveBuild(build) {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    this.http.post('http://localhost:8080/saveBuild', build, options).subscribe( () => this.getBuildFromDB());
  }

}
