import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preparacion',
  templateUrl: './preparacion.page.html',
  styleUrls: ['./preparacion.page.scss'],
})
export class PreparacionPage implements OnInit {

  constructor() { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }

  ngOnInit() {
  }

}
