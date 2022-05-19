import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputRechercheComponent } from './input-recherche/input-recherche.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {path: 'features', component: FeaturesComponent },
  {path: 'search', component: InputRechercheComponent },
  {path: '', component: LandingPageComponent },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
