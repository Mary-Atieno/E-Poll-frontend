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
import { VotercreateComponent } from './components/votercreate/votercreate.component';
import { VoterlistComponent } from './components/voterlist/voterlist.component';
import { HomeComponent } from './components/admin/home/home.component';


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
  { path: 'voter-create', component: VotercreateComponent},
  { path: 'voter-list', component: VoterlistComponent},
  { path: 'admin-dashboard', component: HomeComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
