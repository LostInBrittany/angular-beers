import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BeerList} from "./beerlist/beerList.component";
import {BeerDetail}  from './beerdetail/beerDetail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/beers',
        pathMatch: 'full'
    },
    {
        path: 'beers',
        component: BeerList
    },
    {
        path: 'beers/:id',
        component: BeerDetail
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });