import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent implements OnInit {
  currentSection = 'home';
  constructor() {
  }

  ngOnInit(): void {
  }

  windowScroll() {
    const navbar = document.getElementById('navbar') as HTMLElement;
    if (document.body.scrollTop >= 90 || document.documentElement.scrollTop > 90) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }
}
