import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Suspect} from '../model/model.suspect';


@Injectable({
  providedIn: 'root'
})
export class SuspectService {

public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
  public postRessource(url){ 
    return this.http.get(this.host+url);
  }
  public getRessource2(url){ 
  	return this.http.get(url);
  }
  saveSuspect(suspect:Suspect){
        return this.http.post(this.host+"/suspects",suspect);
       // map(resp=>resp.json());;
  }
  uploadPhoto(file: File, idSuspect, url): Observable<HttpEvent<{}>>{
  	let formdata: FormData = new FormData();
  	formdata.append('file', file);
  	const req = new HttpRequest('POST', this.host+url+idSuspect, formdata, {
  		reportProgress: true,
  		responseType: 'text'	
  	});
  	return this.http.request(req);
  }
}
