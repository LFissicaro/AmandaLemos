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

  constructor() { 
  }

  ngOnInit(): void {
  }

}
