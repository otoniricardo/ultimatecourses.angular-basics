import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';

@Component({
  selector: 'app-donut-single',
  template: `
    <div>
      <app-donut-form
        [donut]="donut"
        (create)="onCreate($event)"
      ></app-donut-form>
    </div>
  `,
  styles: [],
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;

  constructor() {}

  ngOnInit(): void {
    this.donut = {
      id: 'b2c',
      name: 'Glazed fudge',
      icon: 'glazed-fudge',
      price: 129,
      description: 'Sticky perfection',
      promo: 'limited',
    };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
