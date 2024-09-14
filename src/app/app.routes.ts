import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'uno',
    loadComponent: () => import('./uno/uno.page').then( m => m.UnoPage)
  },
  {
    path: 'dos',
    loadComponent: () => import('./dos/dos.page').then( m => m.DosPage)
  },
];
