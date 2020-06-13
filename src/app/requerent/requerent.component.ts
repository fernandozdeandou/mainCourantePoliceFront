import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {RequerentService} from '../services/requerent.service';


@Component({
  selector: 'app-requerent',
  templateUrl: './requerent.component.html',
  styleUrls: ['./requerent.component.css']
})
export class RequerentComponent implements OnInit {
	private currentPage:number=0;
	private size:number=7;
	private pageRequerent;
	private pages;
	private mode; 
	private req;

  constructor(public route: ActivatedRoute,
  	          public requerentService:RequerentService,
              public router:Router) { }

  ngOnInit() {
  	this.mode=1;
  	let url="/requrents?page="+this.currentPage+"&size="+this.size;
  	this.requerentService.getRessource(url)
  	.subscribe(data =>{
  		this.pageRequerent=data;
  		this.pages=new Array(this.pageRequerent.totalPages);
  	}, err =>{
  		console.log(err);
  	})
  }
  gotoPage(i:number){
  	this.currentPage=i;
  	this.ngOnInit();
  }
  chercherRequerent(idReq:number){
  	this.mode=2;
  	let url="/detailRequerent/"+idReq;
  	this.requerentService.getRessource(url)
  	.subscribe(data =>{
  		this.req=data;
  	}, err =>{
  		console.log(err);
  	})
  }
  onRetour(){
  	this.mode=1
  }
}
