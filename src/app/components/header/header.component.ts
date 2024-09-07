import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public headerNavOptions: NavItems[];

  constructor() {
    this.headerNavOptions = [
      {
        name: 'Home',
        route: '/',
      },
      {
        name: 'About',
        route: 'about',
      },
      {
        name: 'Projects',
        route: 'projects',
      },
      {
        name: 'Contact',
        route: 'contact',
      },
    ];
  }
}
