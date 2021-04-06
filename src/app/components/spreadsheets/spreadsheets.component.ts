import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spreadsheets',
  templateUrl: './spreadsheets.component.html',
  styleUrls: ['./spreadsheets.component.scss']
})
export class SpreadsheetsComponent implements OnInit {

  cloud: boolean = false;

  materials: boolean = true;
  type: boolean = false;
  type1: boolean = false;
  type2: boolean = false;
  type3: boolean = false;
  text1: string = "";
  text2: string = "";
  text3: string = "";

  constructor() { }

  ngOnInit(): void {
    this.materials = true;
    this.type = false;
    this.type1 = false;
    this.type2 = false;
    this.type3 = false;
    this.text1 = "Seu intestino não está funcionando de forma correta porque, provavelmente, você não está ingerindo água suficiente. Dessa forma, ele fica ressecado e as fezes não se formam! Beba mais água! Caso o problema não se resolva procure um médico!"
    this.text2 = "Esse é o formato ideal!!! Continue se alimentando e ingerindo água da forma que você está fazendo!!";
    this.text3 = "Seu intestino não está funcionando de forma correta porque, provavelmente, você não está ingerindo fibras suficientes. Dessa forma, ele não consegue dar volume às fezes e elas não se formam! Coma mais vegetais, frutas, legumes e outras fontes de fibras! Mas, não se esqueça de beber água, do contrário seu intestino vai ficar preso! Caso o problema não se resolva procure um médico!!";
  }

  switchCloud(){
    this.cloud = !this.cloud;
    this.backToTop();
  }

  switchMaterials() {
    this.materials = !this.materials;
  }

  switchToType(type: number) {
    this.type = !this.type;
    if (type == 1) {
      this.type1 = true;
    } else if (type == 2) {
      this.type2 = true;
    } else if (type == 3) {
      this.type3 = true;
    }
  }

  goToMaterials(){
    this.type = false;
    this.type1 = this.type2 = this.type3 = false;
  }

  backToTop() {
    window.scroll(0, 0);
  }
}
