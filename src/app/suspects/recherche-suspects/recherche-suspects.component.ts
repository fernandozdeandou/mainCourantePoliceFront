import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {SuspectService} from '../../services/suspect.service';


@Component({
  selector: 'app-recherche-suspects',
  templateUrl: './recherche-suspects.component.html',
  styleUrls: ['./recherche-suspects.component.css']
})
export class RechercheSuspectsComponent implements OnInit {
 private numeroCni;
 private currentSuspect;
 private message;
 private timeStamp;

   constructor( public activatedRoute:ActivatedRoute,
  	            public router:Router,
  	            public suspectService: SuspectService) { 
  	this.numeroCni=activatedRoute.snapshot.params['cni'];
  }
  ngOnInit() {
  	this.suspectService.getRessource("/infosSuspectParNumeroCni/"+this.numeroCni).subscribe(data=>{
  		this.currentSuspect=data;
  		  }, err=>{
  		console.log(err);
  	         })
    }
    onGetDetailSuspect(s){
    //let url1="http://localhost:8080/infosSuspect/"+s.idSuspect;
    let url=btoa("http://localhost:8080/infosSuspect/"+s.idSuspect);
     this.router.navigateByUrl("detail-suspect/"+url);
 }
onRelaxerSuspect(s){
  let confirm=window.confirm("voulez-vous effectivement relaxer"+s.nomPrenom+"?");
    if ( confirm == true){
    let url="http://localhost:8080/relaxerLeSuspect/"
    this.suspectService.getRessource2(url+s.idSuspect)
    .subscribe(data=>{
      this.message=data;
      alert("suspect "+s.nomPrenom+" effectivement relaxé!");
       this.router.navigateByUrl("/suspects/3");
    }, err=>{
      console.log(err);
    })
 }
}
 onRechercherSuspect(s){
   let confirm=window.confirm("voulez-vous effectivement rechercher"+s.nomPrenom+"?");
    if ( confirm == true){
   let url="http://localhost:8080/rechercherLeSuspect/"
    this.suspectService.getRessource2(url+s.idSuspect)
    .subscribe(data=>{
      this.message=data;
      alert("suspect"+s.nomPrenom+" est désormais rechercher !");
       this.router.navigateByUrl("/suspects/1");
    }, err=>{
      console.log(err);
    });
  }
 }
 onDefererSuspect(s){
   let confirm=window.confirm("voulez-vous effectivement déférer"+s.nomPrenom+"?");
    if ( confirm == true){
   let url="http://localhost:8080/defererLeSuspect/"
    this.suspectService.getRessource2(url+s.idSuspect)
    .subscribe(data=>{
      this.message=data;
      alert("défèrement de"+s.nomPrenom+" effectué avec succès!");
       this.router.navigateByUrl("/suspects/4");
    }, err=>{
      console.log(err);
    })
  }
 }
 onEcrouerSuspect(s){
   let confirm=window.confirm("voulez-vous effectivement garder à vue"+s.nomPrenom+"?");
    if ( confirm == true){
   let url="http://localhost:8080/garderAvueLeSuspect/"
    this.suspectService.getRessource2(url+s.idSuspect)
    .subscribe(data=>{
      this.message=data;
      alert(s.nomPrenom+" garder à vue avec succès!");
       this.router.navigateByUrl("/suspects/2");
    }, err=>{
      console.log(err);
    })
  }
 }
 getTS(){
    //return Date.now();
    return this.timeStamp;
  }
  	
}

  

