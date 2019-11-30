import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {CodeHighlighterModule, DropdownModule, TabViewModule} from 'primeng';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';


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
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    TabViewModule,
    CodeHighlighterModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
