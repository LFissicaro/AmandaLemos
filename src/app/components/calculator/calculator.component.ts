import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  visible: boolean = false;
  form1: boolean = true;
  form2: boolean = false;
  form3: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  forms(){
    if(this.form1 == true && this.form2 == this.form3){
      this.form2 = true;
      this.form1 = !this.form2;
    } else {
      if(this.form2 == true && this.form1 == this.form3){
        this.form2 = false;
        this.form3 = !this.form2;
      }
    }
  }

}
