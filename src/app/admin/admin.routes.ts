import { Routes } from '@angular/router';

const loadDonutSingleComponent = () =>
  import('../admin/containers/donut-single/donut-single.component').then(
    ({ DonutSingleComponent }) => DonutSingleComponent
  );

export const AdminRoutes: Routes = [
  {
    path: 'donuts',
    loadComponent: () =>
      import('../admin/containers/donut-list/donut-list.component').then(
        ({ DonutListComponent }) => DonutListComponent
      ),
  },
  {
    path: 'donuts/new',
    loadComponent: loadDonutSingleComponent,
    data: { isEdit: false },
  },
  {
    path: 'donuts/:id',
    loadComponent: loadDonutSingleComponent,
    data: { isEdit: true },
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'donuts',
  },
];
