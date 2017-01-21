import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { HttpModule, JsonpModule }  from '@angular/http';
import {BeerList} from "./beerlist/beerList.component";
import {FilterArrayPipe} from "./pipes/filter-array-pipe";
import {OrderByPipe} from "./pipes/orderby-pipe";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule
    ],
    declarations: [
        BeerList,
        FilterArrayPipe,
        OrderByPipe
    ],
    bootstrap: [BeerList]
})
export class AppModule {
}