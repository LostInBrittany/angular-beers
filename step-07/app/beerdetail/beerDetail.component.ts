import {Component, OnInit}      from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';


@Component({
    selector: 'beer-detail',
    templateUrl: './app/beerdetail/beerDetail.html'
})
export class BeerDetail implements OnInit {
    beer = {};
    beerId = 0;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.beerId = params['id'];
        });
    }
}
