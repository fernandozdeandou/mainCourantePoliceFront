import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule}  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuspectsComponent } from './suspects/suspects.component';
import { DetailSuspectComponent } from './detail-suspect/detail-suspect.component';
import { MentionsComponent } from './mentions/mentions.component';
import {SuspectService} from './services/suspect.service';
import {RequerentService} from './services/requerent.service';
import {PersonnelsService} from './services/personnels.service';
import {MentionsService} from './services/mentions.service';
import {EvenementService} from './services/evenement.service';
import { NewMentionComponent } from './mentions/new-mention/new-mention.component';
import { ObservationComponent } from './mentions/observation/observation.component';
import { RechercheSuspectsComponent } from './suspects/recherche-suspects/recherche-suspects.component';
import { PersonnelsComponent } from './personnels/personnels.component';
import { DetailPersonnelComponent } from './personnels/detail-personnel/detail-personnel.component';
import { RequerentComponent } from './requerent/requerent.component';
import { EvenementComponent } from './evenement/evenement.component';
import { NewPersonnelComponent } from './personnels/new-personnel/new-personnel.component';
import { NewEvenementComponent } from './evenement/new-evenement/new-evenement.component';
import { NewSuspectComponent } from './suspects/new-suspect/new-suspect.component';

const routes:Routes=[
{path:'suspects/:p1', component:SuspectsComponent },
{path:'personnels/:p1', component:PersonnelsComponent},
{path:'detail-suspect/:url', component:DetailSuspectComponent},
{path:'detail-personnel/:url', component:DetailPersonnelComponent},
{path:'mentions', component:MentionsComponent},
{path:'evenement', component:EvenementComponent},
{path:'requerent', component:RequerentComponent},
{path:'observation/:id', component:ObservationComponent},
{path:'recherche_suspect_cni/:cni', component:RechercheSuspectsComponent},
{path:'new-mentions', component:NewMentionComponent},
{path:'new-suspect', component:NewSuspectComponent },
{path:'new-evenement', component:NewEvenementComponent },
{path:'new-personnel', component:NewPersonnelComponent },
{path:'', redirectTo:'/mentions', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SuspectsComponent,
    DetailSuspectComponent,
    MentionsComponent,
    NewMentionComponent,
    ObservationComponent,
    RechercheSuspectsComponent,
    PersonnelsComponent,
    DetailPersonnelComponent,
    RequerentComponent,
    EvenementComponent,
    NewPersonnelComponent,
    NewSuspectComponent,
    NewEvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MentionsService,SuspectService,EvenementService,
  RequerentService,PersonnelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
