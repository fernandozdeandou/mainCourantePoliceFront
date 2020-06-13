import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormEvent} from '../model/model.evenement';


@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
  saveEvenement(formEvent:FormEvent){
  	console.log(formEvent);
        return this.http.post(this.host+"/evenements", formEvent);
  }
}
