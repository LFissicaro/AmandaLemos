import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  //forms
  form1: boolean = true;
  form2: boolean = false;
  form3: boolean = false;

  //variables
  idade: number = 0;
  peso: number = 0;
  altura: number = 0;

  //invalid boolean
  invIdade: boolean = false;
  invPeso: boolean = false;
  invAlt: boolean = false;

  //invalid messages
  idadeMsg: string = "Digite um valor de Idade válido";
  pesoMsg: string = "Digite um valor de peso válido";
  alturaMsg: string = "Digite um valor de altura válido";

  //sexo
  homem: boolean = false;
  mulher: boolean = false;
  lifeStyle: string = "";

  btnClass="selectButton";
  btnClass2 = "selectButton";

  showResult: boolean = false;
  button1: string = "CALCULAR";
  resultMessage: string = "";

  imc: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.form1 = false;
    this.form2 = true;
    this.form3 = false;
    this.peso = 0;
    this.altura = 0;
  }

  firstForm(idadeInput: any, pesoInput: any, alturaInput: any){
    this.idade = idadeInput as number;
    this.peso = pesoInput as number;
    this.altura = alturaInput as number;
    if(this.peso == 0 || this.altura == 0 || this.idade == 0){
      if(this.idade == 0){
        this.invIdade = true;
      }
      if(this.peso == 0){ 
        this.invPeso = true;
      }
      if(this.altura == 0){
        this.invAlt = true;
      }
    } else {
      this.invPeso = false;
      this.invAlt = false;
      this.calculate(this.peso, this.altura);
    }
  }

  secondForm(){
    if(this.homem == this.mulher){

    } else {
      this.form();
    }
  }

  form(){
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

  calculate(p: number, a: number){
    this.imc = this.peso / (this.altura * this.altura);
    console.log(this.idade);
    console.log(this.imc);
    this.form();
  }

  validateSexo(sexo: any){
    if(sexo == "H"){
      if(this.homem){
        this.homem = false;
        this.btnClass = "selectButton";
      } else {
        this.mulher = false;
        this.homem = true;
        this.btnClass = "selectedButton";
        this.btnClass2 = "selectButton";
      }
    } else {
      if(this.mulher){
        this.mulher = false;
        this.btnClass2 = "selectButton";
      } else {
        this.homem = false;
        this.mulher = true;
        this.btnClass2 = "selectedButton";
        this.btnClass = "selectButton";
      }
    }
  }

  validateLifeStyle(style: any){

  }

}
