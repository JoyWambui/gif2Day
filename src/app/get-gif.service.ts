import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetGifService {
  input!:string;

  constructor(private http: HttpClient) { 
  }
  trendingGifs(){
   
  return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=100`);

  };
  gifSearch(gifName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&limit=100`);
 
  }
  
}

