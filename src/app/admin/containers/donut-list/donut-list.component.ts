import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <app-donut-card
          *ngFor="let donut of donuts"
          [donut]="donut"
        ></app-donut-card>
      </ng-container>

      <ng-template #nothing>
        <p>No donuts here...</p>
      </ng-template>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];

  constructor() {}

  ngOnInit(): void {
    this.donuts = [
      {
        id: 1,
        name: 'Just chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocolate',
      },
      {
        id: 2,
        name: 'Glazed fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection',
        promo: true,
      },
      {
        id: 3,
        name: 'Caramel swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      },
    ];
  }
}
