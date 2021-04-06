import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/resources/services/mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  calcText: string = 'A nossa calculadora pode te orientar em diversas coisas ...';
  items: Array<any> = [];
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  constructor(    
    private mailService: MailService
  ){
  }

  ngOnInit(): void {
    this.items = [
    { name: 'assets/images/banner/4.jpg', link: 'https://www.instagram.com/p/CL4EzjXppIa/'},
    { name: 'assets/images/banner/1.jpg', link: 'https://www.instagram.com/p/CLMlE1NJ6_A/'},
    { name: 'assets/images/banner/2.jpg', link: 'https://www.instagram.com/p/CLmPgXJpy61/'},
    { name: 'assets/images/banner/3.jpg', link: 'https://www.instagram.com/p/CKgaPofphKR/'},
    { name: 'assets/images/banner/5.jpg', link: 'https://www.instagram.com/p/CKjBd70J2sl/'}]
  }

  sendMail(){
    console.log("Sending Request");
    let user = {
      name: "Leonardo",
      email: "leofissicaro@gmail.com"
    };
    this.mailService.sendEmail(user).subscribe(
      res => {console.log("Sucessfull request!!!")},
      err => {console.log(err);},
      () => {console.log(":P")}
      );
  }
}
