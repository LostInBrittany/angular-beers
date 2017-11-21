import { Component, OnInit } from '@angular/core';

import { BeersService } from '../services/beers.service';
import { Beer } from '../beer';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  errorMessage : string;

  orderProp : string = 'alcohol';

  beers : Array<Beer> = [
    {
        "alcohol": 8.5,
        "id": "AffligemTripel",
        "name": "Affligem Tripel",
        "img": "",
        "description": "The king of the abbey beers. It is amber-gold and pours with a deep head and original aroma, delivering a complex, full bodied flavour. Pure enjoyment! Secondary fermentation in the bottle."
    },
    {
        "alcohol": 9.2,
        "id": "Rochefort8",
        "name": "Rochefort 8",
        "img": "",
        "description": "A dry but rich flavoured beer with complex fruity and spicy flavours."
    },
    {
        "alcohol": 7,
        "id": "ChimayRouge",
        "name": "Chimay Rouge",
        "img": "",
        "description": "This Trappist beer possesses a beautiful coppery colour that makes it particularly attractive. Topped with a creamy head, it gives off a slight fruity apricot smell from the fermentation. The aroma felt in the mouth is a balance confirming the fruit nuances revealed to the sense of smell. This traditional Belgian beer is best savoured at cellar temperature "
    }
  ];

  constructor(private beersService: BeersService) {
   }

  ngOnInit() {
    this.getBeers();
  }

  getBeers(): void {
    this.beersService.getBeers()
      .subscribe(beers => {

        this.beers = beers;
        if (beers.length == 0) {
          this.errorMessage = "Empty list of beers";
        } else {
          this.errorMessage = "";
        }

      } );
  }
}
