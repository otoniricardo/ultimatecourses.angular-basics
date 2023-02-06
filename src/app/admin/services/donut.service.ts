import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
    {
      id: '1',
      name: 'Just chocolate',
      icon: 'just-chocolate',
      price: 119,
      description: 'For the pure chocolate',
      promo: 'new',
    },
    {
      id: '2',
      name: 'Glazed fudge',
      icon: 'glazed-fudge',
      price: 129,
      description: 'Sticky perfection',
      promo: 'limited',
    },
    {
      id: '3',
      name: 'Caramel swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel',
    },
    {
      id: '4',
      name: 'Sour supreme',
      icon: 'sour-supreme',
      price: 139,
      description: 'For the sour advocate',
    },
    {
      id: '5',
      name: 'Zesty lemon',
      icon: 'zesty-lemon',
      price: 149,
      description: 'Delicious lucious lemon',
    },
  ];
  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut) => donut.id === id);
    return donut ? donut : { name: '', description: '', icon: '', price: 0 };
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut) => {
      if (donut.id !== payload.id) return donut;
      return payload;
    });
    console.log(this.donuts);
  }
}
