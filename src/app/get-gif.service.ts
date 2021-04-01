import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import{catchError, retry} from 'rxjs/operators';
import { Data } from '@angular/router';

const apiKey = environment.apiKey


@Injectable({
  providedIn: 'root'
})
export class GetGifService {

  constructor(private http: HttpClient) { 
  }
  trendingGifs(){
   
  return this.http.get(apiKey);

  };
}

