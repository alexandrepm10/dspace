import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CollectionsComponent } from './collections/collections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodeHighlighterModule, DropdownModule, TabViewModule } from 'primeng';
import { CommonModule } from '@angular/common';
import { BackofficeHomeComponent } from './backoffice/home/home.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './backoffice/login/login.component';
import {
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTableModule, MatTabsModule, MatInputModule, MatCardModule, MatListModule
} from '@angular/material';
import { ItemsSearchComponent } from './items-search/items-search.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {NewsDetailsComponent} from './news-details/news-details.component';
import {CreateNewsComponent} from './backoffice/create-news/create-news.component';
import {EditNewsComponent} from './backoffice/edit-news/edit-news.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './core/auth.guard';
import {EventsComponent} from './events/events.component';
import {ListEventsComponent} from './backoffice/list-events/list-events.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import {CreateEventComponent} from './backoffice/create-event/create-event.component';
import {EditEventComponent} from './backoffice/edit-event/edit-event.component';
import {SocialScienceJournalsComponent} from './social-science-journals/social-science-journals.component';
import {ResearchCentersAndInstitutionsComponent} from './research-centers-and-institutions/research-centers-and-institutions.component';
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ItemsListComponent,
    ItemsDetailComponent,
    CommunitiesComponent,
    CollectionsComponent,
    BackofficeHomeComponent,
    NewsComponent,
    LoginComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    ItemsSearchComponent,
    NewsDetailsComponent,
    CreateNewsComponent,
    EditNewsComponent,
    EventsComponent,
    ListEventsComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EditEventComponent,
    SocialScienceJournalsComponent,
    ResearchCentersAndInstitutionsComponent,
    FooterComponent
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
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    MatGridListModule,
    MatTableModule,
    MatExpansionModule,
    MatTabsModule,
    NgbPaginationModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatListModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule {
}
