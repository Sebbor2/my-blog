import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  version: string;
  charged : boolean;

  constructor() {
    this.title = "Mon Blog Ng5";
    this.version = "V0.0.1";
    this.charged = false;
  }
}
