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
import { CandidatesComponent } from './components/admin/candidates/candidates.component';
import { NewcandidateComponent } from './components/admin/newcandidate/newcandidate.component';
import { PositionsComponent } from './components/admin/positions/positions.component';
import { NewpositionComponent } from './components/admin/newposition/newposition.component';
import { HomeComponent } from './components/admin/home/home.component';
import { VotesComponent } from './components/admin/votes/votes.component';

import { VoterloginComponent } from './components/voterlogin/voterlogin.component';
import { VoterhomeComponent } from './components/voter/voterhome/voterhome.component';
import { VoterlogoutComponent } from './components/voter/voterlogout/voterlogout.component';

import { VotersComponent } from './components/admin/voters/voters.component';

import { VotercreateComponent } from './components/admin/votercreate/votercreate.component';
import { BioComponent } from './components/admin/bio/bio.component';
import { BallotPositionComponent } from './components/admin/ballot-position/ballot-position.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';

import { VoterdashboardComponent } from './components/voter/voterdashboard/voterdashboard.component';




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
    HomeComponent,
    VotesComponent,

    BioComponent,
    BallotPositionComponent,
    SidebarComponent,


    VoterloginComponent,
    VoterhomeComponent,
    VoterlogoutComponent,



    VoterloginComponent,
    VoterhomeComponent,
    VoterlogoutComponent,

    VotersComponent,
    VoterdashboardComponent,

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
