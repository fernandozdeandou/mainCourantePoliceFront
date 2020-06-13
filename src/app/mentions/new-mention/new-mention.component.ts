import { Component, OnInit } from '@angular/core';
import {Mention} from '../../model/model.mention';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {MentionsService} from '../../services/mentions.service';


@Component({
  selector: 'app-new-mention',
  templateUrl: './new-mention.component.html',
  styleUrls: ['./new-mention.component.css']
})
export class NewMentionComponent implements OnInit {
  mention:Mention=new Mention();
  mode:number=1;
  currentMention;
  private defaulTitre:string="saisir le titre";

  constructor(public route: ActivatedRoute,
  	          public mentionService:MentionsService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.mention=dataForm;
  }

  onSaveMention(){
  	this.mentionService.saveMention(this.mention)
  	.subscribe(data=>{
      this.currentMention=data;
  		alert("Mention enregistrée avec success");
      this.router.navigate(['mentions']);
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de la mention");
  	})	
  }
 

}
