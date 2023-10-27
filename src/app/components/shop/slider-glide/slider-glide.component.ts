import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';
import { Funko } from 'src/app/interfaces/interface';
import { FunkosService } from 'src/app/services/funkos.service';

@Component({
  selector: 'app-slider-glide',
  templateUrl: './slider-glide.component.html',
  styleUrls: ['./slider-glide.component.css']
})
export class SliderGlideComponent {

lista: Funko [] = [];	  

constructor(private funkoService: FunkosService) {}

ngOnInit(): void {
  this.mostrarFunkos();
}

async mostrarFunkos() {
  const response = await this.funkoService.getFunkos();
  if(response!=undefined){
    this.lista = response as Funko[];
    console.log(this.lista);
  }else{
    console.log('Error al mostrar los funkos');
  }
}
}
