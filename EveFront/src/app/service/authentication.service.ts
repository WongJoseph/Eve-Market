import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(username + ':' + password),
      'X-Requested-With': 'XMLHttpRequest'
    });
    const options = {headers: headers, withCredentials: true};
    return this.http.post('http://localhost:8080/login', {}, options)
      .map(data => {
        // login successful if there's a username in the response
        const user = data;
        if (user) {
          // store user details in local storage to keep user logged in between page refreshes
          console.log('Reached');
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    const headers = new HttpHeaders({'X-Requested-With': 'XMLHttpRequest'});
    const options = {headers: headers, withCredentials: true};
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    return this.http.post('http://localhost:8080/logout', {}, options);
  }
}

