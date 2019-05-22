import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pdf-viewer';
  pdfSrc: string = 'assets/Pluralsight/Angular CLI.pdf';
}
