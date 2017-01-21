import {Component, Input} from '@angular/core';
@Component({
    selector: 'beer-exerp',
    templateUrl: './app/beerexerp/beerExerp.html'
})
export class BeerExerp implements OnInit {
    @Input()
    beer: any;
}
