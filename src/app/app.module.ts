import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpreadsheetsComponent } from './components/spreadsheets/spreadsheets.component';
import { CardModule } from 'primeng/card';
import { AboutComponent } from './components/about/about.component';
import { DividerModule } from 'primeng/divider';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GalleriaModule } from 'primeng/galleria';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent,
    HeaderComponent,
    FooterComponent,
    SpreadsheetsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    CheckboxModule,
    CommonModule,
    FormsModule,
    RadioButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    CardModule,
    DividerModule,
    Ng2CarouselamosModule,
    GalleriaModule,
    HttpClientModule,
    SelectButtonModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
