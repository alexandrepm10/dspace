import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavComponent} from './nav/nav.component';
import {ItemsListComponent} from './items-list/items-list.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ItemsDetailComponent} from './items-detail/items-detail.component';
import {CommunitiesComponent} from './communities/communities.component';
import {CollectionsComponent} from './collections/collections.component';
import {ItemSearchComponent} from './item-search/item-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ItemsListComponent,
    ItemsDetailComponent,
    CommunitiesComponent,
    CollectionsComponent,
    ItemSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
