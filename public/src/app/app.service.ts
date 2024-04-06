import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService{
  readonly url :string = 'http://localhost:8080/cinema';

  constructor(private http: HttpClient) {

  }

  getData = () => {
    return this.http.get(this.url);
  }
}
