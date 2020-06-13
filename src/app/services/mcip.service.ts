import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class McipService {

  public host:string="http://localhost:8080";

  constructor(private http:HttpClient) { }

  public getRessource(url){ 
  	return this.http.get(this.host+url);
  }
}
