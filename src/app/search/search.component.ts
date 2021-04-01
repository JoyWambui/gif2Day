import { Component, OnInit } from '@angular/core';
import {GetGifService} from '../get-gif.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  gif!: string;
  searchedGifs:any =[];
  constructor(private service:GetGifService) { }

  ngOnInit(): void {
  }
  searchGif(gif: HTMLInputElement){
  this.service.gifSearch(`${gif.value}`)
  .subscribe((response:any)=>{
    console.log('Search Data', response);
    this.searchedGifs = response.data;
    
  });
  
}

}
