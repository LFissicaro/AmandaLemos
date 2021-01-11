import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  link: string = "https://www.instagram.com/amandalemos/"

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  goToInsta(){
    this.route.navigateByUrl(this.link);
  }
}
