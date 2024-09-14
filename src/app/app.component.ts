import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './components/sections/first-section/first-section.component';
import { SecondSectionComponent } from './components/sections/second-section/second-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'personal-portifolio';
}
