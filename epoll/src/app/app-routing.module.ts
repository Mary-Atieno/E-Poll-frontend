import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VoterregComponent } from './components/voterreg/voterreg.component';
import { CandidatesComponent } from './components/admin/candidates/candidates.component';
import { NewcandidateComponent } from './components/admin/newcandidate/newcandidate.component';
import { PositionsComponent } from './components/admin/positions/positions.component';
import { NewpositionComponent } from './components/admin/newposition/newposition.component';
import { HomeComponent } from './components/admin/home/home.component';
import { VoterloginComponent } from './components/voterlogin/voterlogin.component';
import { VoterhomeComponent } from './components/voter/voterhome/voterhome.component';
import { VoterlogoutComponent } from './components/voter/voterlogout/voterlogout.component';
import { VotesComponent } from './components/admin/votes/votes.component';
import { VotersComponent } from './components/admin/voters/voters.component';
import { VotercreateComponent } from './components/admin/votercreate/votercreate.component';
import { BallotPositionComponent } from './components/admin/ballot-position/ballot-position.component';
import { BioComponent } from './components/admin/bio/bio.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { VoterdashboardComponent } from './components/voter/voterdashboard/voterdashboard.component';
import { CandidateDetailsComponent } from './components/admin/candidate-details/candidate-details.component';
// <app-candidates></app-candidates>
// <app-home></app-home>
// <app-newcandidate></app-newcandidate>
// <app-newposition></app-newposition>
// <app-positions></app-positions>
// <app-sidebar></app-sidebar>
// <app-votercreate></app-votercreate>
// <app-voters></app-voters>
// <app-votes></app-votes> -->



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingpageComponent},
  { path: 'admin-login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'candidates', component: CandidatesComponent},
  { path: 'new-candidate', component: NewcandidateComponent},
  { path: 'positions', component: PositionsComponent},
  { path: 'new-position', component: NewpositionComponent},
  { path: 'admin-dashboard', component: HomeComponent},

//  Voter Routes
  { path: 'voter-register', component: VoterregComponent},
  { path: 'voter-login', component: VoterloginComponent},
  { path: 'voter-home', component: VoterhomeComponent},
  { path: 'voter-logout', component: VoterlogoutComponent},
  { path: 'voter-dashboard', component: VoterdashboardComponent},


  // Admin Routes
  { path: 'totalvotes', component: VotesComponent},
  { path: 'all-voters', component: VotersComponent},
  { path: 'new-voter', component: VotercreateComponent},
  { path: 'candidate-id', component:CandidateDetailsComponent}



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
