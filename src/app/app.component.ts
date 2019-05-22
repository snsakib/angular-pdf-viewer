import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-pdf-viewer';
  platform: string;

  ngOnInit() {
    this.platform = window.navigator.userAgent;
  }
}
