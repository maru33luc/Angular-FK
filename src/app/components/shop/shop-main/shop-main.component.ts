import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css']
})
export class ShopMainComponent implements OnInit, AfterViewInit {
  itemsPerPage = 9;
  pageLinks: NodeListOf<Element> | undefined;
  previousPage: HTMLElement = {} as HTMLElement;
  nextPage: HTMLElement = {} as HTMLElement;

  allItems!: NodeListOf<Element>;
  totalItems!: number;

  currentPage = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.previousPage = {} as HTMLElement;
    this.nextPage = {} as HTMLElement;
  }

  ngOnInit() {
    // Initialize your data, for example, fetch items and set totalItems
    this.pageLinks = this.elementRef.nativeElement.querySelectorAll('.page-link');
    this.previousPage = this.elementRef.nativeElement.querySelector('#previous-page');
    this.nextPage = this.elementRef.nativeElement.querySelector('#next-page');
  }

  ngAfterViewInit() {
    this.allItems = this.elementRef.nativeElement.querySelectorAll('.card-item');
    this.totalItems = this.allItems.length;
    this.showPage(this.currentPage);

    if (this.pageLinks) {
      this.pageLinks.forEach((link, index) => {
        this.renderer.listen(link, 'click', (event) => {
          event.preventDefault();
          if (this.goToPage) {
            this.goToPage(index);
          }
        });
      });
    }

    if (this.previousPage) {
      this.renderer.listen(this.previousPage, 'click', (event) => {
        event.preventDefault();
        if (this.goToPage) {
          this.goToPage(this.currentPage - 1);
        }
      });
    }

    if (this.nextPage) {
      this.renderer.listen(this.nextPage, 'click', (event) => {
        event.preventDefault();
        if (this.goToPage) {
          this.goToPage(this.currentPage + 1);
        }
      });
    }
  }

  showPage(pageNumber: number) {
    const startIndex = pageNumber * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.allItems.forEach((item, index) => {
      if (index >= startIndex && index < endIndex) {
        this.renderer.setStyle(item, 'position', 'relative');
        this.renderer.setStyle(item, 'display', 'block');
      } else {
        this.renderer.setStyle(item, 'position', 'relative');
        this.renderer.setStyle(item, 'display', 'none');
      }
    });

    if(this.pageLinks){
       this.pageLinks.forEach((link, index) => {
      if (index === pageNumber) {
        this.renderer.addClass(link, 'active');
      } else {
        this.renderer.removeClass(link, 'active');
      }}
      );
    
    }
    }
   

  goToPage(pageNumber: number) {
    if (pageNumber < 0) {
      this.currentPage = 0;
    } else if (pageNumber >= Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.currentPage = Math.ceil(this.totalItems / this.itemsPerPage) - 1;
    } else {
      this.currentPage = pageNumber;
    }

    this.showPage(this.currentPage);
  }
}
