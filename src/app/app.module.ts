import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//services:
import {TeamService} from './team.service'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { NotFoundRouteComponent } from './not-found-route/not-found-route.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent },
  { path: 'team/:id', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainComponent, pathMatch: 'full' /*full coincidences: exact path*/},
  { path: '**', component: NotFoundRouteComponent, pathMatch: 'full' /* **: unknown path will always redirect to this path */}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    MainComponent,
    AboutUsComponent,
    TeamComponent,
    NotFoundRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
