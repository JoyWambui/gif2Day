import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{GetGifService} from '../get-gif.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trendingGifs: any=[];

  constructor(private service: GetGifService) {
   }
  ngOnInit() {
    this.service.trendingGifs()
    .subscribe((response:any)=>{
      this.trendingGifs = response.data;
      
    })
  }

}
