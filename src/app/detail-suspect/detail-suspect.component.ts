import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {SuspectService} from '../services/suspect.service'


@Component({
  selector: 'app-detail-suspect',
  templateUrl: './detail-suspect.component.html',
  styleUrls: ['./detail-suspect.component.css']
})
export class DetailSuspectComponent implements OnInit {
	private editPhoto1: boolean;
  private editPhoto2: boolean;
  private editPhoto3: boolean;
  private suspect: any;
  private selectedFile;
  private progress: number;
  private currentFileUpload: any;
  timeStamp:number=0;
  private message;
  private adEvent;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
  	          public suspectService: SuspectService) { }

  ngOnInit() {
  	let url=atob(this.route.snapshot.params.url);
  	this.suspectService.getRessource2(url).subscribe(data=>{
  		this.suspect= data;
  	})
  }
  addEvent(){
    this.adEvent=true;
  }
  onAddEvent(idEvent:number){
    let url="/ajouterEvenement?idSuspect="+this.suspect.idSuspect+"&idEvenement="+idEvent;
    this.suspectService.getRessource(url).subscribe(data=>{
      console.log(data);
      alert("Evenement ajouté avec success");
      this.ngOnInit();
      this.adEvent=undefined;
    })
  }
  onEditPhoto1(suspect){
    this.suspect=suspect;
    this.editPhoto1=true;
  }
  onEditPhoto2(suspect){
    this.suspect=suspect;
    this.editPhoto2=true;
  }
  onEditPhoto3(suspect){
    this.suspect=suspect;
    this.editPhoto3=true;
  }
  onSelectedFile(event){
    this.selectedFile=event.target.files;
  }
  uploadPhotoEntiere(){
    this.uploadPhotoSus("/uploadPhotoEntiere/");
  }
  uploadPhotoProfilSusp(){
    this.uploadPhotoSus("/uploadPhotoProfil/");
  }
  uploadPhotoFaceSusp(){
    this.uploadPhotoSus("/uploadPhotoFace/");
  }

 private  uploadPhotoSus(url){
    this.progress=0;
    this.currentFileUpload = this.selectedFile.item(0);
    this.suspectService.uploadPhoto(this.currentFileUpload, this.suspect.idSuspect, url).subscribe(event =>{
      if (event.type===HttpEventType.UploadProgress){
        this.progress = Math.round(100*event.loaded/event.total);
      }else if (event instanceof HttpResponse){
        console.log(this.progress);
         alert("fin du téléchargement...")
         this.timeStamp=Date.now();
      }
    }, err=>{
      alert("Problème de chargement")
    })

  }
  getTS(){
    //return Date.now();
    return this.timeStamp;
  }
  onRelaxer(suspect){
    let url="http://localhost:8080/relaxerLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect)
    .subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onDeferer(suspect){
    let url="http://localhost:8080/defererLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect).subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onGarderAvue(suspect){
    let url="http://localhost:8080/garderAvueLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect).subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }
  onRechercher(suspect){
    let url="http://localhost:8080/rechercherLeSuspect/"
    this.suspectService.getRessource2(url+suspect.idSuspect)
    .subscribe(data=>{
      this.message=data;
    }, err=>{
      console.log(err);
    })
  }

}
