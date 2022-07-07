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
import { FormsModule } from '@angular/forms';
import { VoterregComponent } from './components/voterreg/voterreg.component';
import { BallotPositionComponent } from './components/admin/ballot-position/ballot-position.component';
import { CandidatesComponent } from './components/admin/candidates/candidates.component';
import { PositionComponent } from './components/admin/position/position.component';
import { VotersComponent } from './components/admin/voters/voters.component';
import { VotesComponent } from './components/admin/votes/votes.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { BioComponent } from './components/admin/bio/bio.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    VoterregComponent,
    BallotPositionComponent,
    CandidatesComponent,
    PositionComponent,
    VotersComponent,
    VotesComponent,
    SidebarComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
