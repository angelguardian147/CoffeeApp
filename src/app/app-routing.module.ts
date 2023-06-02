import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BisnessPageComponent } from './bisness-page/bisness-page.component';
import { ComprensionDataPageComponent } from './comprension-data-page/comprension-data-page.component';
import { PreparationDataPageComponent } from './preparation-data-page/preparation-data-page.component';
import { ModelingPageComponent } from './modeling-page/modeling-page.component';
import { EvaluationPageComponent } from './evaluation-page/evaluation-page.component';
import { ModelsPageComponent } from './models-page/models-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { IntroductionComponent } from './index-page/introduction/introduction.component';
import { ObjetivesComponent } from './index-page/objetives/objetives.component';

const routes: Routes = [{ path: 'home', pathMatch: 'full', component: IndexPageComponent,
                          children: [
                            { path: 'introduction', component: IntroductionComponent },
                            { path: 'objetives', component: ObjetivesComponent }
                          ]},
                        { path: 'bisness-comprension', component: BisnessPageComponent},
                        { path: 'data-comprension', component: ComprensionDataPageComponent},
                        { path: 'data-preparation', component: PreparationDataPageComponent},
                        { path: 'data-modeling', component: ModelingPageComponent},
                        { path: 'model-evaluation', component: EvaluationPageComponent},
                        { path: 'models', component: ModelsPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
