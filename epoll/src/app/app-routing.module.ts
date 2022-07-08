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



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingpageComponent},
  { path: 'admin-login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'voter-register', component: VoterregComponent},
  { path: 'candidates', component: CandidatesComponent},
  { path: 'new-candidate', component: NewcandidateComponent},
  { path: 'positions', component: PositionsComponent},
  { path: 'new-position', component: NewpositionComponent},
  { path: 'admin-dashboard', component: HomeComponent},

  { path: 'voter-login', component: VoterloginComponent},
  { path: 'voter-home', component: VoterhomeComponent},
  { path: 'voter-logout', component: VoterlogoutComponent},

  { path: 'totalvotes', component: VotesComponent},
  { path: 'all-voters', component: VotersComponent},
  { path: 'new-voter', component: VotercreateComponent},



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
