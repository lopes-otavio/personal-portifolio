import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActionButtonComponent } from '../../action-button/action-button.component';
import { TechIcon } from '../../../interfaces/techIcon';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [CommonModule, RouterModule, ActionButtonComponent],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.scss',
})
export class SecondSectionComponent {
  public techIcons: TechIcon[];

  constructor() {
    this.techIcons = [
      {
        name: 'git',
        src: 'assets/icons/git.png',
      },
      {
        name: 'typeScript',
        src: 'assets/icons/typeScript.png',
      },
      {
        name: 'angular',
        src: 'assets/icons/angular.png',
      },
      {
        name: 'react',
        src: 'assets/icons/react.png',
      },
      {
        name: 'node',
        src: 'assets/icons/node.png',
      },
    ];
  }
}
