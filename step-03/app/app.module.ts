import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BeerList} from "./beerlist/beerList.component";
import {FilterArrayPipe} from "./pipes/filter-array-pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        BeerList,
        FilterArrayPipe
    ],
    bootstrap: [BeerList]
})
export class AppModule {
}