import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {MentionsService} from '../services/mentions.service';
import {Observation} from '../model/model.observation';



@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {
private currentNumeroMention;
private	pageMentions:any;
private	currentPage:number=0;
private	size:number=7;
private	pages:Array<number>;
private tableauObservation=[];
public mode=1;
private currentMention;
private title:string;
private listeMention;
private observation;
private observationVide=[
{idObservation:0, message:null  }
];

  constructor(public route: ActivatedRoute,
  	          public mentionService:MentionsService,
              public router:Router) { }

  ngOnInit() {
 this.initMentions();
  }

  initMentions(){
    this.mode=1;
  	this.mentionService.getMentions( this.currentPage, this.size)
  	.subscribe(data =>{
      this.title="Liste de toutes les mentions de la MCIP par page";
  		this.pageMentions=data;
  		this.pages=new Array(this.pageMentions.totalPage);
      // this.pageMentions.mention.forEach(ment=>{
      //   this.onGetObservationMention(ment.numeroMention);
      //   });
      // console.log(this.tableauObservation);
  	}, err =>{
  		console.log(err);
  	})
  }
  gotoPage(i:number){
  	this.currentPage=i;
  	this.initMentions();
  }
  chercherNumero(id:number){
    this.mentionService.getMention(id)
    .subscribe(data =>{
      this.currentMention=data; 
      if(this.currentMention==null){
        alert("Vérifier que le numéro saisi est un entier positif. Si tel est le cas, alors le mention recherchée n'existe pas!");
        this.mode=1;
      } else{
        this.title="Iformations concernant la mention"+id;
        this.mode=2;
      }
    }, err =>{
      console.log(err);
    })
   }
   chercherDate(date:Date){
    this.mentionService.getMentionsDate(date)
    .subscribe(data =>{
      this.listeMention=data; 
      if(this.listeMention==null){
        alert("Vérifier que la date est correcte. Si tel est le cas, alors le mention recherchée n'existe pas!");
        this.mode=1;
      } else{
        this.title="Liste de toutes les mentions du "+date;
        this.mode=3;
      } 
    }, err =>{
       alert("Vérifiez que la date saisie  est correcte. Si tel est le cas, alors il n'existent pas de mentions pour cette date");
      console.log(err);
    })
   }
   onRetour(){
     this.mode=1;
   } 
   onObservation(id:number){
     this.router.navigate(['observation',id]);
   }
}
