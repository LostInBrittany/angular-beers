import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BeerList} from "./beerlist/beerList.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [BeerList],
    bootstrap: [BeerList]
})
export class AppModule {
}