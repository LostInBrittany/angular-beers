import {Component, Input} from '@angular/core';
@Component({
    selector: 'beer-exerp',
    templateUrl: './beerExerp.html'
})
export class BeerExerp implements OnInit {
    @Input()
    beer: any;
}
