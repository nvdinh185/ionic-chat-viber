import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class PostUserProvider {

  constructor(public http: Http) {}

  register(value) {
    const url = 'https://dinh-server.herokuapp.com/signup';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }
  login(value) {
    const url = 'https://dinh-server.herokuapp.com/login';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }
  logout(value) {
    const url = 'https://dinh-server.herokuapp.com/logout';
    const headers = new Headers({'Content-Type': 'application/json'});
    const body = JSON.stringify(value);
    return this.http.post(url, body, { headers })
     .toPromise()
     .then(res => res.json());
  }


}
