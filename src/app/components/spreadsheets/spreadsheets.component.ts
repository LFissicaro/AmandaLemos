import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spreadsheets',
  templateUrl: './spreadsheets.component.html',
  styleUrls: ['./spreadsheets.component.scss']
})
export class SpreadsheetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }  

  backToTop(){
    // var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // if(currentScroll > 0){
    //   window.requestAnimationFrame(smoothscroll);
    // }
    window.scroll(0,0);
  }
}
