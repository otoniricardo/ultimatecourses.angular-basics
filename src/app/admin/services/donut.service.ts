import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Donut } from '../models/donut.model';

@Injectable({
  providedIn: 'root',
})
export class DonutService {
  private donuts: Donut[] = [];

  constructor(private http: HttpClient) {}

  read() {
    return this.http.get<Donut[]>(`/api/donuts`);
    // return this.donuts;
  }

  // readOne(id: string) {
  //   const donut = this.read().find((donut) => donut.id === id);
  //   return donut ? donut : { name: '', description: '', icon: '', price: 0 };
  // }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((donut) => {
      if (donut.id !== payload.id) return donut;
      return payload;
    });
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut) => donut.id !== payload.id);
  }
}
