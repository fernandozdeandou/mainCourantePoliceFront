import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {EvenementService} from '../../services/evenement.service'
import {FormEvent} from '../../model/model.evenement';


@Component({
  selector: 'app-new-evenement',
  templateUrl: './new-evenement.component.html',
  styleUrls: ['./new-evenement.component.css']
})
export class NewEvenementComponent implements OnInit {
  private formEvent:FormEvent=new FormEvent();
  private mode:number=1;
  private currentEvent;

  constructor(public route: ActivatedRoute,
  	          public evenementService:EvenementService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.formEvent=dataForm;
    console.log(this.formEvent);
  }

  onSaveEvenement(){
  	this.evenementService.saveEvenement(this.formEvent)
  	.subscribe(data=>{
      this.currentEvent=data;
      console.log(this.currentEvent);
  		alert("Evenement enregistré avec success");
     // this.router.navigate(['mentions']);
      this.router.navigateByUrl("/evenement");
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de l'évènement");
  	})	
  }


}
