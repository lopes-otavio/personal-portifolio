import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { ButtonComponent } from '../../interfaces/button';
import { ButtonType, ButtonIcon } from '../../types';
import { ButtonTypeEnum } from '../../enums/button.enum';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [CommonModule, RouterModule, FeatherModule],
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss',
})
export class ActionButtonComponent implements ButtonComponent {
  @Input({ required: true, alias: 'button-type' })
  public type: ButtonType;

  @Input('button-text')
  public text: string;

  @Input('button-icon')
  public icon: ButtonIcon;

  @Input('icon-right')
  public iconRight: boolean;

  public buttonTypeEnum: typeof ButtonTypeEnum = ButtonTypeEnum;
}
