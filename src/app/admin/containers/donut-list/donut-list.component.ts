import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <ng-container *ngIf="donuts.length; else nothing">
        <app-donut-card
          *ngFor="let donut of donuts; trackBy: trackById"
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
        id: 'a1b',
        name: 'Just chocolate',
        icon: 'just-chocolate',
        price: 119,
        description: 'For the pure chocolate',
        promo: 'new',
      },
      {
        id: 'b2c',
        name: 'Glazed fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection',
        promo: 'limited',
      },
      {
        id: 'c3d',
        name: 'Caramel swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      },
      {
        id: 'd4e',
        name: 'Sour supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate',
      },
      {
        id: 'e5f',
        name: 'Zesty lemon',
        icon: 'zesty-lemon',
        price: 149,
        description: 'Delicious lucious lemon',
      },
    ];
  }

  trackById(index: number, item: Donut) {
    return item.id;
  }
}
