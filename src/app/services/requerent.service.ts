import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequerentService {

  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
}
