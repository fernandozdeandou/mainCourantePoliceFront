import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mention} from '../model/model.mention';
import {Observation} from '../model/model.observation';

@Injectable({
  providedIn: 'root'
})
export class MentionsService {
public host:string="http://localhost:8080";


  constructor(private http:HttpClient) { }


  getMentions(page:number, size:number){
		return this.http.get(this.host+"/mentions?page="+page+"&size="+size);
  	//.map(resp=>resp.json());
	}
	getMention(numeroMention:number){
		return this.http.get(this.host+"/infosMention/"+numeroMention);
	}

	getMentionsDate(dateMention){
		return this.http.get(this.host+"/ListerMentionParDate?dateMention="+dateMention);
	}
	saveMention(mention:Mention){
        return this.http.post(this.host+"/mentions", mention);
       // map(resp=>resp.json());;
	}
	faireObservation(id:number,observation:Observation){
		return this.http.post(this.host+"/faireObservation/"+id, observation);
	}
}

