import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { HomeComponent } from './components/home/home.component';
import { SpreadsheetsComponent } from './components/spreadsheets/spreadsheets.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Inicio', component: HomeComponent
  },
  { 
    path: 'Calculadora', component: CalculatorComponent 
  },
  {
    path: 'Materiais', component: SpreadsheetsComponent
  },
  {
    path: 'QuemSouEu', component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
