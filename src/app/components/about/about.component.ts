import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  text1: string = "Mineira de Belo Horizonte, tenho 22 anos e sou estudante de nutrição apaixonada por tudo que envolve vida saudável.";
  text2: string = "Engordei 17 quilos em 3 meses quando fiz intercâmbio e, desde então, meus hábitos mudaram completamente! Passei a cozinhar, treinar e me alimentar bem buscando sempre cuidar da minha saúde!!";
  text3: string = "Compartilho meu dia a dia no instagram, tiro várias dúvidas de diversos assuntos e busco, de alguma forma, ajudar quem me acompanha nessa mudança de estilo de vida!";
  text4: string = "Te garanto, quando você muda não tem mais como voltar!!";

  constructor() { }

  ngOnInit(): void {
  }

}
