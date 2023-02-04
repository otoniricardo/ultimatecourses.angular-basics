import { Component, Input } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-card',
  template: `
    <div
      class="donut-card"
      [ngClass]="{
        'donut-card-promo': donut.promo
      }"
    >
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ donut.name }}
          <ng-container [ngSwitch]="donut.promo" ]>
            <span
              *ngSwitchCase="'new'"
              class="donut-card-label"
              style="color: red; border-color: red"
              >NEW</span
            >
            <span *ngSwitchCase="'limited'" class="donut-card-label"
              >LIMITED</span
            >
            <span *ngSwitchDefault class="donut-card-label"
              >Nothing especial...</span
            >
          </ng-container>
        </p>
        <p class="donut-card-price">
          {{ donut.price / 100 | currency : 'BRL' : 'symbol' }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
        &-name {
          tont-size: 16px;
        }
        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4 px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
        &-promo {
          border: 2px solid #eee;
        }
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut;

  constructor() {}
}
