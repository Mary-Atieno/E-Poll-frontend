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
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidatecreateComponent } from './components/candidatecreate/candidatecreate.component';
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
    CandidateListComponent,
    CandidatecreateComponent,
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
