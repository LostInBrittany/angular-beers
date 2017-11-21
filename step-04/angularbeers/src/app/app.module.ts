import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FilterArrayPipe } from './pipes/filter-array-pipe';
import { OrderByPipe } from './pipes/orderby-pipe';


@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    FilterArrayPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
