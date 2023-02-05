import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

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

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    const id = 'b2c';
    const donut = this.donutService.donuts.find((donut) => donut.id === id);
    this.donut = donut
      ? donut
      : { name: '', description: '', icon: '', price: 0 };
  }

  onCreate(donut: Donut) {
    console.log('onCreate', donut);
  }
}
