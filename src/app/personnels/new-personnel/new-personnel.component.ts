import { Component, OnInit } from '@angular/core';
import {Personnel} from '../../model/model.personnel';
import {ActivatedRoute, Router, NavigationEnd} from  '@angular/router';
import {PersonnelsService} from '../../services/personnels.service';


@Component({
  selector: 'app-new-personnel',
  templateUrl: './new-personnel.component.html',
  styleUrls: ['./new-personnel.component.css']
})
export class NewPersonnelComponent implements OnInit {

  private personnel:Personnel=new Personnel();
  private mode:number=1;
  private currentPerso;

  constructor(public route: ActivatedRoute,
  	          public personnelsService: PersonnelsService,
              public router:Router) { }

  ngOnInit() {
  }
  onConfirmer(dataForm){
    this.mode=2;
    this.personnel=dataForm;
    console.log(this.personnel);
  }

  onSavePersonnel(){
  	this.personnelsService.savePersonnel(this.personnel)
  	.subscribe(data=>{
      this.currentPerso=data;
      console.log(this.currentPerso);
  		alert("Personnel enregistré avec success");
     // this.router.navigate(['mentions']);
      this.router.navigateByUrl("/personnels/1");
  	}, err=>{
      console.log(err);
  		alert("Une erreur est survenue lors de l'enregistrement de la mention");
  	})	
  }


}
