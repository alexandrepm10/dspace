import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { CommunitiesComponent } from './communities/communities.component';
import { CollectionsComponent } from './collections/collections.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ItemsSearchComponent } from './items-search/items-search.component';
import { BackofficeHomeComponent } from './backoffice/home/home.component';
import { LoginComponent } from './backoffice/login/login.component';
import { CreateNewsComponent } from './backoffice/create-news/create-news.component';
import { EditNewsComponent } from './backoffice/edit-news/edit-news.component';
import { ListEventsComponent } from './backoffice/list-events/list-events.component';
import { CreateEventComponent } from './backoffice/create-event/create-event.component';
import { EditEventComponent } from './backoffice/edit-event/edit-event.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items-list/:uuid', component: ItemsListComponent },
  { path: 'items-list', component: ItemsListComponent },
  { path: 'itemsdetail/:uuid', component: ItemsDetailComponent },
  { path: 'communities', component: CommunitiesComponent },
  { path: 'collections/:uuid', component: CollectionsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'noticias', component: NewsComponent },
  { path: 'noticias/:id', component: NewsDetailsComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'eventos/:id', component: EventDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'items-search/:queryVal', component: ItemsSearchComponent },
  { path: 'items-search/:queryVal/:queryField', component: ItemsSearchComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin', component: BackofficeHomeComponent, canActivate: [AuthGuard] },
  { path: 'admin/create-news', component: CreateNewsComponent, canActivate: [AuthGuard] },
  { path: 'admin/edit-news/:id', component: EditNewsComponent, canActivate: [AuthGuard] },
  { path: 'admin/events', component: ListEventsComponent, canActivate: [AuthGuard] },
  { path: 'admin/create-event', component: CreateEventComponent, canActivate: [AuthGuard] },
  { path: 'admin/edit-event/:id', component: EditEventComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
