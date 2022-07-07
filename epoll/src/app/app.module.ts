import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoterregComponent } from './components/voterreg/voterreg.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { NewcandidateComponent } from './components/newcandidate/newcandidate.component';
import { PositionsComponent } from './components/positions/positions.component';
import { NewpositionComponent } from './components/newposition/newposition.component';
import { VotercreateComponent } from './components/votercreate/votercreate.component';
import { VoterlistComponent } from './components/voterlist/voterlist.component';
import { HomeComponent } from './components/admin/home/home.component';
import { VotesComponent } from './components/admin/votes/votes.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    VoterregComponent,
    CandidatesComponent,
    NewcandidateComponent,
    PositionsComponent,
    NewpositionComponent,
    VotercreateComponent,
    VoterlistComponent,
    HomeComponent,
    VotesComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
