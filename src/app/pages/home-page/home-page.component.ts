import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit() {
    new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      gap: 10,
      breakpoints: {
        1000: {
          perView: 2
        },
        712: {
          perView: 1
        }
      }
    }).mount();
  }
 
    

  }

