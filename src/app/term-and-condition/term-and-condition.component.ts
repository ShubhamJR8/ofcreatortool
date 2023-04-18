import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-and-condition',
  templateUrl: './term-and-condition.component.html',
  styleUrls: ['./term-and-condition.component.css']
})
export class TermAndConditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  windowScroll() {
    const navbar = document.getElementById('navbar') as HTMLElement;
    if (document.body.scrollTop >= 90 || document.documentElement.scrollTop > 90) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

}
