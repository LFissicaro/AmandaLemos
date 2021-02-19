import { Component, OnInit } from '@angular/core';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  calcText: string = 'A nossa calculadora pode te orientar em diversas coisas ...';
  items: Array<any> = [];

  constructor() { 
    this.items = [
    { name: 'assets/images/carousel.jpeg' },
    { name: 'assets/images/carousel2.jpeg' },
    { name: 'assets/images/carousel3.jpeg' },
    { name: 'assets/images/carousel.jpeg' },
    { name: 'assets/images/carousel2.jpeg' },
    { name: 'assets/images/carousel3.jpeg' }
  ]
  }

  ngOnInit(): void {
  }
}
