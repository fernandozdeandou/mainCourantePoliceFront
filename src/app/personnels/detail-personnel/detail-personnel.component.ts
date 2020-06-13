import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {PersonnelsService} from '../../services/personnels.service';


@Component({
  selector: 'app-detail-personnel',
  templateUrl: './detail-personnel.component.html',
  styleUrls: ['./detail-personnel.component.css']
})
export class DetailPersonnelComponent implements OnInit {
	private personnel;
  timeStamp:number=0;
  private editPhoto;
  private selectedFile;
  private progress: number;
  private currentFileUpload: any;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
  	          public personnelService: PersonnelsService) { }

  ngOnInit() {
  	let url=atob(this.route.snapshot.params.url);
  	this.personnelService.getRessource2(url).subscribe(data=>{
  		this.personnel= data;
  	})
  }
  getTS(){
    //return Date.now();
    return this.timeStamp;
  }
  onEditPhoto(){
    this.editPhoto=true;
  }
  onSelectedFile(event){
    this.selectedFile=event.target.files;
  }
  uploadPhotoPersonnel(){
    this.progress=0;
    this.currentFileUpload = this.selectedFile.item(0);
    this.personnelService.uploadPhoto(this.currentFileUpload, this.personnel.matricule,'/uploadPhotoProfilPerso/').subscribe(event =>{
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
  retourListPersonnel(){
    this.router.navigateByUrl("/personnels/1");
    this.router.navigateByUrl("/personnels/1");
  }

}
 