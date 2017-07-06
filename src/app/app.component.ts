import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myData: Array<any>;

  constructor(private _http:Http) {
    this._http.get('https://jsonplaceholder.typicode.com/photos')
    .map(response => response.json())
    .subscribe(res => this.myData = res);
  }
}
