import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputRechercheComponent } from './input-recherche/input-recherche.component';
import { FeaturesComponent } from './features/features.component';
import { FromComponent } from './from/from.component';
import { AbooneesComponent } from './aboonees/aboonees.component';
import { OnAbooneeComponent } from './on-aboonee/on-aboonee.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: 'newsletter/:id', component: FromComponent},
  {path: 'newsletter', component: FromComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'search', component: InputRechercheComponent},
  {path: 'abonnees/:id', component: OnAbooneeComponent},
  {path: 'abonnees', component: AbooneesComponent},
  {path: '', component: LandingPageComponent},
  {path: 'page404', component: Page404Component},
  {path: '**', redirectTo: 'page404'}

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
