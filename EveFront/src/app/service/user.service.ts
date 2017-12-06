import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../domain/user';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

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
    return this.http.post('http://localhost:8080/updateUser', user, options).map(data => {
      const test = data;
      return test;
    });
  }

  forgotPass(user: User) {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    return this.http.post('http://localhost:8080/forgotPassword', user, options).map(data => {
      const test = data;
      return test;
    });
  }

  finduserinfo() {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    return this.http.post<User>('http://localhost:8080//findUserInfo', {}, options).map(data => {
      const test = data;
      return test;
    });
  }


}
