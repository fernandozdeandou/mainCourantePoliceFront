import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {PersonnelsService} from '../services/personnels.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {
  private currentPage:number=0;
  private size:number=5;
	private personnels:any;
	private title;
  private pages;
  private matricule;
  private currentPersonnel;
  private mode:number;
  private message;

  constructor(private route: ActivatedRoute,
  	          private router: Router,
              public personnelService:PersonnelsService) { }

  ngOnInit() {

  this.router.events.subscribe((val)=>{
  if (val instanceof NavigationEnd) {
  	       let url = val.url;  		
  	       let p1 = this.route.snapshot.params.p1;
			if (p1==1){
        this.mode=1;
        this.title="Liste de tout le personnel";
				this.getPersonnels('/personnels');
		    } else if (p1==2) {
        this.mode=1;
        this.title="Liste du personnel opérationnel";
			  this.getPersonnels('/personnelOperationnel');
		    } else if (p1==3) {
        this.mode=1;
        this.title="liste du personnel malade";
        this.getPersonnels('/personnelMalade');
        } 
        else if (p1==4) {
          this.mode=1;
          this.title="liste du personnel permissionnaire";
          this.getPersonnels('/personnelPermissionnaire');
        } 
        else if (p1==5) {
          this.mode=1;
          this.title="liste du personnel en congé";
          this.getPersonnels('/personnelConge');
        } else if (p1==6) {
          this.mode=1;
          this.title="liste du personnel affecté";
          this.getPersonnels('/ListerPersonnelAffecte');
        } else if (p1==7) {
          this.mode=2;
          this.title="personnel recherché";
          this.getPersonnel();
        } 
		 }				  	          	
	});
    this.router.navigateByUrl("/personnels/7");
    this.router.navigateByUrl("/personnels/1");
    this.router.navigateByUrl("/personnels/3");
    this.router.navigateByUrl("/personnels/4");
    this.router.navigateByUrl("/personnels/5");
    this.router.navigateByUrl("/personnels/6");
    this.router.navigateByUrl("/personnels/2");
    
}
private getPersonnels(url){
  	this.personnelService.getRessource(url+'?page='+this.currentPage+'&size='+this.size)
  	.subscribe(data=>{
  		this.personnels=data;
      this.pages=new Array(this.personnels.totalPage);
     
  	}, err=>{
  		console.log(err);
  	})
  }
  onGetDetailPersonnel(p){
    let url=btoa("http://localhost:8080/detailPersonnel/"+p.matricule);
     this.router.navigateByUrl("detail-personnel/"+url);
 }
 gotoPage(i:number){
    this.currentPage=i;
    if (this.title='Liste de tout le personnel') {
      this.getPersonnels('/personnels');
      this.router.navigateByUrl("/personnels/1");
    } else if (this.title='Liste du personnel opérationnel') {
      this.getPersonnels('/personnelOperationnel');
      this.router.navigateByUrl("/personnels/2");
    } else if (this.title='liste du personnel malade') {
      this.getPersonnels('/personnelMalade');
      this.router.navigateByUrl("/personnels/3");
    } else if (this.title='liste du personnel permissionnaire') {
      this.getPersonnels('/personnelPermissionnaire');
      this.router.navigateByUrl("/personnels/4");
    }else if (this.title='liste du personnel en congé') {
      this.getPersonnels('/personnelConge');
      this.router.navigateByUrl("/personnels/5");
    }else if (this.title='liste du personnel affecté') {
      this.getPersonnels('/ListerPersonnelAffecte');
      this.router.navigateByUrl("/personnels/6");
    }
  }
  chercherParMatricule(matricule:string){
    this.mode=2;
    this.matricule=matricule; 
    this.router.navigateByUrl("/personnels/7");
     }
  private getPersonnel(){
    this.personnelService.getRessource('/detailPersonnel/'+this.matricule)
    .subscribe(data=>{
      this.currentPersonnel=data;
    }, err=>{
      console.log(err);
    })
  }

  onOperationnel(p){
  let confirm=window.confirm("voulez-vous effectivement rendre opérationnel "+p.nomPrenom+"?");
    if ( confirm == true){
    let url="/mettrePersonnelOperationnel/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais opérationnel !");
      this.router.navigateByUrl("/personnels/2");
    }, err=>{
      console.log(err);
    })
    }
  }
  onConge(p){
    let confirm=window.confirm("voulez-vous effectivement mettre "+p.nomPrenom+" en congé ?");
    if ( confirm == true){
    let url="/mettrePersonnelEnConge/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais en congé !");
      this.router.navigateByUrl("/personnels/5");
    }, err=>{
      console.log(err);
    })
    }
  }
  onMalade(p){
    let confirm=window.confirm("voulez-vous effectivement rendre "+p.nomPrenom+" malade ?");
    if ( confirm == true){
    let url="/mettrePersonnelMalade/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais Malade !");
      this.router.navigateByUrl("/personnels/3");
    }, err=>{
      console.log(err);
    })
    }
  }
  onPermissionnaire(p){
    let confirm=window.confirm("voulez-vous effectivement rendre "+p.nomPrenom+" permissionnaire ?");
    if ( confirm == true){
    let url="/mettrePersonnelEnPermission/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais permissionnaire !");
      this.router.navigateByUrl("/personnels/4");
    }, err=>{
      console.log(err);
    })
    }
  }
  onAffecter(p){
    let confirm=window.confirm("voulez-vous effectivement affecter "+p.nomPrenom+" ?");
    if ( confirm == true){
    let url="/affecterPersonnel/"
    this.personnelService.getRessource(url+p.matricule)
    .subscribe(data=>{
      this.message=data;
      alert(p.nomPrenom+" désormais affecté !");
      this.router.navigateByUrl("/personnels/6");
    }, err=>{
      console.log(err);
    })
    }
  }
}
