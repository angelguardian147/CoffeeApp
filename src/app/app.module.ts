import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { BisnessPageComponent } from './bisness-page/bisness-page.component';
import { ComprensionDataPageComponent } from './comprension-data-page/comprension-data-page.component';
import { PreparationDataPageComponent } from './preparation-data-page/preparation-data-page.component';
import { ModelingPageComponent } from './modeling-page/modeling-page.component';
import { EvaluationPageComponent } from './evaluation-page/evaluation-page.component';
import { ModelsPageComponent } from './models-page/models-page.component';
import { IntroductionComponent } from './index-page/introduction/introduction.component';
import { ObjetivesComponent } from './index-page/objetives/objetives.component';
import { LinksComponent } from './index-page/links/links.component';
import { CarouselComponent } from './index-page/carousel/carousel.component';
import { CarouselEndComponent } from './index-page/carousel-end/carousel-end.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IndexPageComponent,
    BisnessPageComponent,
    ComprensionDataPageComponent,
    PreparationDataPageComponent,
    ModelingPageComponent,
    EvaluationPageComponent,
    ModelsPageComponent,
    IntroductionComponent,
    ObjetivesComponent,
    LinksComponent,
    CarouselComponent,
    CarouselEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
