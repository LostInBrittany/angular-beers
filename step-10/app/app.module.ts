import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule}  from '@angular/http';
import {AppComponent} from './app.component';
import {BeerList} from "./beerlist/beerList.component";
import {BeerDetail}  from './beerdetail/beerDetail.component';
import {BeerExerp} from './beerexerp/beerExerp.component'
import {FilterArrayPipe} from "./pipes/filter-array-pipe";
import {OrderByPipe} from "./pipes/orderby-pipe";
import {routing} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        JsonpModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        BeerList,
        BeerDetail,
        BeerExerp,
        FilterArrayPipe,
        OrderByPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}