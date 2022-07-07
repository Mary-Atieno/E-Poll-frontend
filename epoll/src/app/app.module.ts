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
import { CandidatesComponent } from './components/candidates/candidates.component';
import { NewcandidateComponent } from './components/newcandidate/newcandidate.component';
import { PositionsComponent } from './components/positions/positions.component';
import { NewpositionComponent } from './components/newposition/newposition.component';

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
    NewpositionComponent
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
