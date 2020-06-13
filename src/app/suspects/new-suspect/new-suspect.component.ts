import { Component, OnInit } from '@angular/core';
import {Suspect} from '../../model/model.suspect';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {SuspectService} from '../../services/suspect.service';


@Component({
  selector: 'app-new-suspect',
  templateUrl: './new-suspect.component.html',
  styleUrls: ['./new-suspect.component.css']
})
export class NewSuspectComponent implements OnInit {
  private suspect:Suspect=new Suspect();
  private mode:number=1;
  private currentSusp;

  constructor(public route: ActivatedRoute,
  	          public suspectService: SuspectService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.suspect=dataForm;
  }

  onSaveMention(){
  	this.suspectService.saveSuspect(this.suspect)
  	.subscribe(data=>{
      this.currentSusp=data;
  		alert("Suspect enregistré avec success");
     // this.router.navigate(['mentions']);
      this.router.navigateByUrl("/suspects/3");
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de la mention");
  	})	
  }

}
