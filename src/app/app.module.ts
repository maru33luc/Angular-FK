import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { CollectionComponent } from './components/collection/collection.component';
import { SliderGlideComponent } from './components/slider-glide/slider-glide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HeroComponent,
    CollectionComponent,
    SliderGlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
