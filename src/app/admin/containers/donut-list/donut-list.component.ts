import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-list',
  template: `
    <div>
      <div>
        {{ donut.name }}
        {{ donut.price }}
      </div>
    </div>
  `,
  styles: [],
})
export class DonutListComponent implements OnInit {
  donuts!: any[];
  donut!: any;

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
        icon: 'glazed-fusge',
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
