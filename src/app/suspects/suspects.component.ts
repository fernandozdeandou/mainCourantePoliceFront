import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {SuspectService} from '../services/suspect.service';


@Component({
  selector: 'app-suspects',
  templateUrl: './suspects.component.html',
  styleUrls: ['./suspects.component.css']
})
export class SuspectsComponent implements OnInit {
	private suspects;
	private title:string;
  private message;
  private timeStamp:number=0;
  private urlmc;
  
  constructor(private route: ActivatedRoute,
  	          private router: Router,
  	          public suspectService: SuspectService) { }

  ngOnInit() {

  this.router.events.subscribe((val)=>{
  if (val instanceof NavigationEnd) {
  	       let url = val.url;  		
  	       let p1 = this.route.snapshot.params.p1;
			if (p1==1){
        this.title="Liste des suspects recherchés";
				this.getSuspects('/listSuspectRechercher');
		    } else if (p1==2) {
      this.title="Liste des suspect gardés à vue";
			this.getSuspects('/suspectsGarderAvue');
		    } else if (p1==3) {
      this.title="liste de tout les suspects";
      this.getSuspects('/suspects');
        } 
        else if (p1==4) {
      this.title="liste des suspects déférés";
      this.getSuspects('/listSuspectDeferer');
        }
        else if (p1==5) {
      this.title="liste des suspects ayant le nom recherché";
      this.getSuspects(this.urlmc);
       } 
		 }
				  	          	
	});
    this.router.navigateByUrl("/suspects/1");
    this.router.navigateByUrl("/suspects/5");
    this.router.navigateByUrl("/suspects/2");
    this.router.navigateByUrl("/suspects/4");
    this.router.navigateByUrl("/suspects/3");
    
}
  private getSuspects(url){
  	this.suspectService.getRessource(url)
  	.subscribe(data=>{
  		this.suspects=data;
  	}, err=>{
  		console.log(err);
  	})
  }
  chercherMotCle(mc:string){
    this.urlmc="/listSuspectParNom/"+mc;
    this.router.navigateByUrl("/suspects/5");
   
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
   let confirm=window.confirm("voulez-vous effectivement rechercher "+s.nomPrenom+" ?");
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
   let confirm=window.confirm("voulez-vous effectivement déférer "+s.nomPrenom+"?");
    if ( confirm == true){
   let url="http://localhost:8080/defererLeSuspect/"
    this.suspectService.getRessource2(url+s.idSuspect)
    .subscribe(data=>{
      this.message=data;
      console.log(data);
      alert("défèrement de "+s.nomPrenom+" effectué avec succès!");
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
  chercherNumeroCni(cni:string){
     this.router.navigate(['recherche_suspect_cni',cni]);
   }
   
}


