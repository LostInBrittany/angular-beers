import {Component} from '@angular/core';
import {FilterArrayPipe} from '../pipes/filter-array-pipe';
import {OrderByPipe} from '../pipes/orderby-pipe';
import {BeerService} from '../beers.service';

@Component({
    selector: 'beer-list',
    templateUrl: './app/beerlist/beerList.html',
    pipes: [FilterArrayPipe, OrderByPipe],
    providers: [BeerService]
})

export class BeerList {
    orderProp = 'alcohol';
    beers = [];
    mode = 'Promise';

    constructor(private beerService: BeerService) {
    }

    ngOnInit() {
        this.getBeers();
    }

    getBeers() {
        this.beerService.getBeers()
            .then(
                beers => this.beers = beers,
                error => this.errorMessage = <any>error);
    }

}