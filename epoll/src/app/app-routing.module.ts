import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VoterregComponent } from './components/voterreg/voterreg.component';
import { CandidatecreateComponent } from './components/candidatecreate/candidatecreate.component';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { VotercreateComponent } from './components/votercreate/votercreate.component';
import { VoterlistComponent } from './components/voterlist/voterlist.component';
import { HomeComponent } from './components/admin/home/home.component';
import { VoterloginComponent } from './components/voterlogin/voterlogin.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: LandingpageComponent},
  { path: 'admin-login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'voter-register', component: VoterregComponent},
  { path: 'candidate-create', component: CandidatecreateComponent},
  { path: 'candidate-list', component: CandidateListComponent},
  { path: 'voter-create', component: VotercreateComponent},
  { path: 'voter-list', component: VoterlistComponent},
  { path: 'admin-dashboard', component: HomeComponent},
  { path: 'voter-login', component: VoterloginComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
