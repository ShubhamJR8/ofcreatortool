import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
    throw new Error('Method not implemented.');
  }
  title = 'OFCreatortools';
}
