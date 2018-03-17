import {Component, OnInit, Input} from '@angular/core';
import {SearchService} from "./search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
    public show:number;
    public bool:boolean;
    private loading: boolean = false;/////http

  constructor( private searchService: SearchService){}

ngOnInit(){}

  onClick(index){
      setTimeout(()=>{
          this.show = index;
          this.bool =  !this.bool;
    },500);
  }

/////http
  onSearchData(term: string) {
    this.loading =true;
    this.searchService.search(term).then(_ => this.loading = false)
  }
}