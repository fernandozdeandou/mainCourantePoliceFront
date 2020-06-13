import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {EvenementService} from '../services/evenement.service';


@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
	private currentPage:number=0;
	private size:number=7;
	private pageEvenement;
	private pages;
	private mode; 
	private event;

  constructor(public route: ActivatedRoute,
  	          public evenementService:EvenementService,
              public router:Router) { }

  ngOnInit() {
  	this.initEvenement();
  }
  private initEvenement(){
  	this.mode=1;
  	let url="/evenements?page="+this.currentPage+"&size="+this.size;
  	this.evenementService.getRessource(url)
  	.subscribe(data =>{
  		this.pageEvenement=data;
  		this.pages=new Array(this.pageEvenement.totalPages);
  	}, err =>{
  		console.log(err);
  	})
  }
  gotoPage(i:number){
  	this.currentPage=i;
  	this.ngOnInit();
  }
  chercherEvenement(idEvent:number){
  	this.mode=2;
  	let url="/infosEvenement/"+idEvent;
  	this.evenementService.getRessource(url)
  	.subscribe(data =>{
  		this.event=data;  
  	}, err =>{
  		console.log(err);
  	})
  }
  onRetour(){
  	this.mode=1
  }

}
