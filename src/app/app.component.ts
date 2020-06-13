import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mainCourantePolice';



	constructor(private router: Router){ }
  ngOnInit() {
   
  }


  onSuspectsGarderAvue(){
    this.router.navigateByUrl("/suspects/2");
  }
  onSuspectsRechercher(){
    this.router.navigateByUrl("/suspects/1");
  }
  onListerTousSuspects(){
    this.router.navigateByUrl("/suspects/3");
  }
  onSuspectsDeferer(){
    this.router.navigateByUrl("/suspects/4");
  }
  onGetMentions(){
    this.router.navigateByUrl("/mentions");
  }
  onAjouterMention(){
     this.router.navigateByUrl("/new-mentions");
  }
  onPersonnelConge(){
    this.router.navigateByUrl("/personnels/5");
  }
  onPersonnelMalade(){
    this.router.navigateByUrl("/personnels/3");
  }
  onPersonnelOperationnel(){
    this.router.navigateByUrl("/personnels/2");
  }
  onPersonnelAffecte(){
    this.router.navigateByUrl("/personnels/6");
  }
  onPersonnelPermissionnaire(){
    this.router.navigateByUrl("/personnels/4");
  }
  onAllPersonnel(){
    this.router.navigateByUrl("/personnels/1");
  }
  onGetRequerent(){
    this.router.navigateByUrl("/requerent");
  }
  onGetEvenement(){
    this.router.navigateByUrl("/evenement");
  }
  onAddPersonnel(){
    this.router.navigate(['new-personnel']);
  }
  onAjouterEvenement(){
    this.router.navigate(['new-evenement']);
  }
}
