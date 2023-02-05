import { Injectable } from '@angular/core';
import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [
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
  constructor() {}

  read() {
    return this.donuts;
  }

  readOne(id: string) {
    const donut = this.read().find((donut) => donut.id === id);
    return donut ? donut : { name: '', description: '', icon: '', price: 0 };
  }
}
