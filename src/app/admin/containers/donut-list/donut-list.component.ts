import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DonutCardComponent } from '../../components/donut-card/donut-card.component';
import { Donut } from '../../models/donut.model';
import { DonutService } from '../../services/donut.service';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf, DonutCardComponent],
  selector: 'app-donut-list',
  template: `
    <div>
      <div class="donut-list-actions">
        <a routerLink="new" class="btn btn--green"
          >New Donut
          <img src="/assets/img/icon/plus.svg" />
        </a>
      </div>

      <ng-container *ngIf="donuts?.length; else nothing">
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
  styles: [
    `
      .donut-list {
        &-actions {
          margin-bottom: 10px;
        }
      }
    `,
  ],
})
export class DonutListComponent implements OnInit {
  donuts?: Donut[];

  constructor(private donutService: DonutService) {}

  ngOnInit(): void {
    this.donutService.read().subscribe((donuts) => (this.donuts = donuts));
  }

  trackById(index: number, item: Donut) {
    return item.id;
  }
}
