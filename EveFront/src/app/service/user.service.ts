import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../domain/user';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  // getAll() {
  //   return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  // }
  //
  // getById(id: number) {
  //   return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  create(user: User) {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    return this.http.post('http://localhost:8080/registration', user, options).map(data => {
      const test = data;
      return test;
    });
  }

  update(user: User) {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    return this.http.post('http://localhost:8080//updateUser', user, options).map(data => {
      const test = data;
      return test;
    });
  }
  //
  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }
  //
  // // private helper methods
  //
  // private jwt() {
  //   // create authorization header with jwt token
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser && currentUser.token) {
  //     let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
  //     return new RequestOptions({headers: headers});
  //   }
  // }
}
