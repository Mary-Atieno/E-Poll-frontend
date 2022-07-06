import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BallotComponent } from './votingcomponents/ballot/ballot.component';
import { ResultComponent } from './votingcomponents/result/result.component';
import { VerifyComponent } from './votingcomponents/verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    BallotComponent,
    ResultComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
