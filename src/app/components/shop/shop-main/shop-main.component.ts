import { Component, OnInit } from '@angular/core';
import { Funko } from 'src/app/interfaces/interface';
import { FunkosService } from 'src/app/services/funkos.service';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit {

  lista: Funko[] = [];
  itemsPerPage = 9;
  currentPage = 0;
  pages: number[] = [];

  constructor(private funkoService: FunkosService) {}

  ngOnInit() {
    this.mostrarFunkos();
  }

  async mostrarFunkos() {
    const response = await this.funkoService.getFunkos();
    if (response != undefined) {
      this.lista = response as Funko[];
      this.calculateTotalPages();
    } else {
      console.log('Error al mostrar los funkos');
    }
  }

  calculateTotalPages() {
    this.pages = Array(Math.ceil(this.lista.length / this.itemsPerPage)).fill(0).map((_, i) => i);
  }

  get paginatedItems() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.lista.slice(startIndex, endIndex);
  }

  changePage(newPage: number) {
    if (newPage < 0) {
      this.currentPage = 0;
    } else if (newPage >= this.pages.length) {
      this.currentPage = this.pages.length - 1;
    } else {
      this.currentPage = newPage;
    }
    // Prevent the default behavior of the anchor tags
    return false;
  }
  
}
