import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {BeerService} from '../beers.service';

@Component({
    selector: 'beer-detail',
    templateUrl: './app/beerdetail/beerDetail.html',
    providers: [BeerService],
    animations: [
        trigger('beerState', [
            state('inactive', style({
                backgroundColor: '#fff',
                transform: 'scale(1)'
            })),
            state('active',   style({
                backgroundColor: '#0275d8',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class BeerDetail implements OnInit {
    beer = {};
    mainImg;
    state = {
        img : 'inactive',
        label: 'inactive'
    };

    constructor(private route: ActivatedRoute,
                private beerService: BeerService) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.getBeer(params['id']);
        });
    }

    getBeer(beerId: String) {
        this.beerService.getBeer(beerId)
            .then(
                beer => {
                    this.beer = beer;
                    this.setImage('img');
                },
                error => this.errorMessage = <any>error
            );
    }

    setImage(obj: String) {
        this.mainImg = this.beer[obj];
        if(obj === 'img') {
            this.state.img = 'active';
            this.state.label = 'inactive';
        } else {
            this.state.img = 'inactive';
            this.state.label = 'active';
        }
    }
}
