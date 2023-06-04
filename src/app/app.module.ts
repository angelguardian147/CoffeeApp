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
import { ResumeComponent } from './index-page/resume/resume.component';
import { LinksBpComponent } from './bisness-page/links-bp/links-bp.component';
import { BusinessHomeComponent } from './bisness-page/business-home/business-home.component';
import { BusinessObjetivesComponent } from './bisness-page/business-objetives/business-objetives.component';
import { BusinessInformationComponent } from './bisness-page/business-information/business-information.component';
import { BusinessDefinitionComponent } from './bisness-page/business-definition/business-definition.component';
import { BusinessDeterminationComponent } from './bisness-page/business-determination/business-determination.component';
import { BusinessEstateComponent } from './bisness-page/business-estate/business-estate.component';
import { ModalComponent } from './modal/modal.component';
import { BusinessPlanComponent } from './bisness-page/business-plan/business-plan.component';
import { LinksCdpComponent } from './comprension-data-page/links-cdp/links-cdp.component';
import { ComprensionHomeComponent } from './comprension-data-page/comprension-home/comprension-home.component';
import { DataRecopilationComponent } from './comprension-data-page/data-recopilation/data-recopilation.component';
import { DataDescriptionComponent } from './comprension-data-page/data-description/data-description.component';
import { DataExplorationComponent } from './comprension-data-page/data-exploration/data-exploration.component';
import { DataVerificationComponent } from './comprension-data-page/data-verification/data-verification.component';

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
    CarouselEndComponent,
    ResumeComponent,
    LinksBpComponent,
    BusinessHomeComponent,
    BusinessObjetivesComponent,
    BusinessInformationComponent,
    BusinessDefinitionComponent,
    BusinessDeterminationComponent,
    BusinessEstateComponent,
    ModalComponent,
    BusinessPlanComponent,
    LinksCdpComponent,
    ComprensionHomeComponent,
    DataRecopilationComponent,
    DataDescriptionComponent,
    DataExplorationComponent,
    DataVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
