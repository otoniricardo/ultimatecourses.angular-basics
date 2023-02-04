import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <app-donut-card></app-donut-card>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: Donut[];
  donut!: Donut;

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
      },
      {
        id: 3,
        name: 'Caramel swirl',
        icon: 'caramel-swirl',
        price: 129,
        description: 'Chocolate drizzled with caramel',
      },
    ];
    this.donut = this.donuts[0];
  }
}
