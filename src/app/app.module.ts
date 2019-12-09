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
import {CodeHighlighterModule, DropdownModule, TabViewModule} from 'primeng';
import {CommonModule} from '@angular/common';
import {BackofficeHomeComponent} from './backoffice/home/home.component';
import {NewsComponent} from './news/news.component';
import {LoginComponent} from './backoffice/login/login.component';
import {MatFormFieldModule, MatProgressSpinnerModule, MatSelectModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ItemsListComponent,
    ItemsDetailComponent,
    CommunitiesComponent,
    CollectionsComponent,
    ItemSearchComponent,
    BackofficeHomeComponent,
    NewsComponent,
    LoginComponent,
    AppComponent,
    HomeComponent,
    LoginComponent
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
    MatSelectModule,
    MatProgressSpinnerModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
