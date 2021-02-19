import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Sexo } from 'src/app/resources/models/Sexo';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  //forms
  form0: boolean = true;
  form1: boolean = false;
  form2: boolean = false;
  form3: boolean = false;

  //invalid boolean
  invIdade: boolean = false;
  invPeso: boolean = false;
  invAlt: boolean = false;
  invStyle: boolean = false;

  //invalid messages
  idadeMsg: string = "Digite um valor de Idade válido";
  pesoMsg: string = "Digite um valor de peso válido";
  alturaMsg: string = "Digite um valor de altura válido";
  styleMessage: string = "Escolha um estilo de vida";

  //sexo
  sexo: Sexo = new Sexo();
  sexos: Sexo[] = [];
  selectedStyle: string = "";
  homem: boolean = false;
  mulher: boolean = false;

  btnClass = "selectButton";
  btnClass2 = "selectButton";

  showResult: boolean = false;
  button: string = "SEGUINTE";
  resultMessage: string = "";
  leadPage: boolean = false;

  //variables
  idade: number = 0;
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  imcString: string = "";
  tmb: number = 0;
  nafValue: number = 0;
  net: number = 0;
  water: number = 0;

  //textos 
  imcText: string = "O seu IMC ou Índice de Massa Corporal tem o intuito de medir se você esta ou não acima do peso. Esses valores são determinados por uma tabela e não são muito bons! Por exemplo: um fisiculturista seria classificado como obeso de acordo com o IMC, sendo que não é verdade!";
  nafText1: string = "O NAF ou Nível de Atividade Física leva em consideração as suas atividades diárias que demandam esforço do seu corpo!";
  nafText2: string = "Selecione com honestidade em qual desses grupos você se encaixa! Como já expliquei no início, se você mentir os seus resultados serão ainda mais distantes da realidade!";
  sedentario: string = "não pratica nenhuma atividade física, tem um trabalho pouco ativos (por exemplo: trabalha sentado o dia todo)";
  menosAtivo: string = "trabalha sentado e faz exercícios leves OU trabalha de forma ativa e não faz nenhum exercício";
  ativo: string = "faz exercícios frequentemente porém não se mantém ativo o dia todos, ou seja, tem um trabalho que não é ativo";
  muitoAtivo: string = "exercício intenso, pelo menos 6x na semana";
  initialText: string = "Você quer saber quantas calorias deve consumir? Qual seu metabolismo? Calma, que eu vim te ajudar!!!";
  initialText2: string = " Elaborei essa calculadora que faz todas essas continhas para você! Todos os resultados são encontrados com base nas diretrizes nutricionais e nas fórmulas indicadas pelos órgãos de saúde!";
  initialText3: string = " Lembrando que: todos os resultados são estimativas e existem diversas formas desse cálculo ser feito. Seja pela bioimpedância, pelas dobras cutâneas, calorimetria indireta ou qualquer outrométodo os resultados não serão iguais!";
  initialText4: string = " Além disso, o corpo humano não é uma calculadora então os valores são apenas formas de direcionamento! Não é para ficar contando calorias obsessivamente!!";
  initialText5: string = " É super importante que você NÃO MINTA DE FORMA NENHUMA! Se as informações que você preencher e selecionar não forem condizentes com a realidade seus resultados, que já são estimados, serão ainda mais distantes da realidade e não vão valer de nada!";
  resultText: string = "Agora que você já tem todas essas informações vou te ensinar a montar as suas refeições!";
  resultText2: string = "É super importante que você busque uma alimentação o mais natural possível com frutas, legumes, carnes, ovos e oleaginosas! Dessa forma, você vai garantir que seu corpo esteja sempre o mais nutrido possível!";
  resultText3: string = "Em cada uma das suas refeições tente incluir uma proteína e alguma gordura OU carboidrato! Não exagere na quantidade de gordura e de carboidrato, uma vez que ambos têm a função de dar energia para o nosso corpo. Seleciona qual deles você deseja que esteja presente de forma mais expressiva!";
  resultText4: string = "Pare refeições como almoço e jantar divida seu prato na metade. Em uma das metades você colocará apenas salada e vegetais. Na outra metade você coloca proteínas e carboidratos divididos igualmente!";
  resultText5: string = "Aqui embaixo coloquei onde você pode encontrar carboidratos, proteínas e gorduras de qualidade para compor sua alimentação!";

  constructor() {
    this.sexo = new Sexo();
    this.sexos = [{ sexo: "Homem", value: true }, { sexo: "Mulher", value: false }];
  }

  ngOnInit(): void {
    this.form0 = true;
    this.form1 = false;
    this.form2 = false;
    this.form3 = false;
    this.leadPage = false;
    this.peso = 0;
    this.altura = 0;
  }

  backToTop(){
    // var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    // if(currentScroll > 0){
    //   window.requestAnimationFrame(smoothscroll);
    // }
    window.scroll(0,0);
  }

  reloadPage() {
    window.location.reload();
  }

  firstForm(idadeInput: any, pesoInput: any, alturaInput: any) {
    this.idade = idadeInput as number;
    this.peso = pesoInput as number;
    this.altura = alturaInput as number;
    if (this.peso == 0 || this.altura == 0 || this.idade == 0) {
      if (this.idade == 0) {
        this.invIdade = true;
      }
      if (this.peso == 0) {
        this.invPeso = true;
      }
      if (this.altura == 0) {
        this.invAlt = true;
      }
    } else {
      this.invPeso = false;
      this.invAlt = false;
      this.calculate(this.peso, this.altura);
    }
  }

  secondForm() {
    //definindo sexo.value
    if (this.sexo.value == true) {
      this.sexo.sexo = "Homem";
    } else {
      this.sexo.sexo = "Mulher"
    }

    //validando estilo de vida e definindo valor de NAF
    if (this.selectedStyle == "") {
      this.invStyle = true;
    } else {
      //valorizando NAF
      this.calculateTmb();
      this.calculateNaf();
      this.calculateNet();
      this.form();
    }
  }

  form() {
    if (this.form1 == true && this.form2 == this.form3) {
      this.form2 = true;
      this.form1 = !this.form2;
    } else {
      if (this.form2 == true && this.form1 == this.form3) {
        this.form2 = false;
        this.form3 = !this.form2;
      }
    }
  }

  calculate(p: number, a: number) {
    this.imc = this.peso / (this.altura * this.altura);
    this.imc = parseFloat(this.imc.toFixed(2));
    this.calculateWater();
    this.imcResult(this.imc);
    this.form();
  }

  imcResult(imc: number) {
    if (imc < 18.5) {
      this.imcString = "Magreza";
    } else if (imc < 25 && imc >= 18.5) {
      this.imcString = "Normal";
    } else if (imc < 30 && imc >= 25) {
      this.imcString = "SobrePeso";
    } else if (imc < 40 && imc >= 30) {
      this.imcString = "Obesidade";
    } else if (imc >= 40) {
      this.imcString = "Obesidade Morbida";
    }
  }

  calculateNaf() {
    if (this.sexo.value == true && this.imc >= 25) {     //p homens c imc > 25    
      if (this.selectedStyle.toString() == "Sedentário") {
        this.nafValue = 1;
      } else if (this.selectedStyle.toString() == "Menos Ativo") {
        this.nafValue = 1.12;
      } else if (this.selectedStyle.toString() == "Ativo") {
        this.nafValue = 1.27;
      } else if (this.selectedStyle.toString() == "Muito Ativo") {
        this.nafValue = 1.54;
      }
    } else { //p homens e mulheres com imc < 25 e mulheres com imc > 25
      if (this.selectedStyle.toString() == "Sedentário") {
        this.nafValue = 1;
      } else if (this.selectedStyle.toString() == "Menos Ativo") {
        this.nafValue = 1.14;
      } else if (this.selectedStyle.toString() == "Ativo") {
        this.nafValue = 1.27;
      } else if (this.selectedStyle.toString() == "Muito Ativo") {
        this.nafValue = 1.45;
      }
    }
  }

  calculateTmb() {
    if (this.sexo.value == true) {//homens
      if (this.imc >= 18.5 && this.imc < 25) { //peso normal
        this.tmb = 204 - (4 * this.idade) + (450.5 * this.altura) + (11.68 * this.peso);
        this.tmb = parseFloat(this.tmb.toFixed(2));
      }
      else if (this.imc >= 25 && this.imc < 30) { //sobrepeso
        this.tmb = 293 - (3.8 * this.idade) + (456.4 * this.altura) + (10.12 * this.peso);
        this.tmb = parseFloat(this.tmb.toFixed(2));
      }
    }
    else if (this.sexo.value == false) {//mulheres
      if (this.imc >= 18 && this.imc < 25) {//peso normal
        this.tmb = 255 - (2.55 * this.idade) + (261.6 * this.altura) + (9.39 * this.peso);
        this.tmb = parseFloat(this.tmb.toFixed(2));
      }
      else if (this.imc >= 25 && this.imc < 30) {//sobrepeso
        this.tmb = 247 - (2.67 * this.idade) + (401.5 * this.altura) + (8.6 * this.peso);
        this.tmb = parseFloat(this.tmb.toFixed(2));
      }
    }
  }

  calculateNet() {
    if (this.imc < 25) {
      if (this.sexo.value == true) {
        this.net = 662 - 9.53 * this.idade + (this.nafValue * ((15.91 * this.peso) + (539.6 * this.altura)));
        this.net = parseFloat(this.net.toFixed(2));
      } else {
        this.net = 354 - 6.91 * this.idade + (this.nafValue * ((9.36 * this.peso) + (726 * this.altura)));
        this.net = parseFloat(this.net.toFixed(2));
      }
    } else {
      if (this.sexo.value == true) {
        this.net = 864 - 9.72 * this.idade + (this.nafValue * ((14.2 * this.peso) + (503 * this.altura)));
        this.net = parseFloat(this.net.toFixed(2));
      } else {
        this.net = 387 - 7.31 * this.idade + (this.nafValue * ((10.9 * this.peso) + (660.7 * this.altura)));
        this.net = parseFloat(this.net.toFixed(2));
      }
    }
  }

  calculateWater() {
    this.water = this.peso * 0.035
    this.water = parseFloat(this.water.toFixed(2));
  }

  openLeadPage(){
    // this.leadPage = true;
    // console.log(this.leadPage);
    window.print();
  }

}
