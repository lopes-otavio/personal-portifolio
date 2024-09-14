import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from '../../action-button/action-button.component';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [CommonModule, RouterModule, ActionButtonComponent],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.scss',
})
export class FirstSectionComponent {}
