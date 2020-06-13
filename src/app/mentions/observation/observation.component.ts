import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {MentionsService} from '../../services/mentions.service';
import {Observation} from '../../model/model.observation';


@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.css']
})
export class ObservationComponent implements OnInit {
	numeroMention;
	observation:Observation=new Observation();
  mode:number=1;

  constructor( public activatedRoute:ActivatedRoute,
  	           public mentionService:MentionsService,
  			   public router:Router) { 
  	this.numeroMention=activatedRoute.snapshot.params['id'];
}

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.observation=dataForm;
  }
  onFaireObservation(){
  	this.mentionService.faireObservation(this.numeroMention,this.observation)
  	.subscribe(data=>{
      //this.currentMention=data;
      console.log(data);
  		alert("Observation effectuée avec success");
      this.router.navigate(['mentions']);
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de l'observation");
  	})	
  }
  onAnnuler(){
  	this.router.navigate(['mentions']);
  }

}
