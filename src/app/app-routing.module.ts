import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { RestComponent } from './components/rest/rest.component';
import { SoapComponent } from './components/soap/soap.component';

const routes: Routes = [{
	path: 'home',
    component: HomeComponent,
  },
  {
	path: 'developers',
    component: DevelopersComponent
  },
  {
  path: 'rest',
    component: RestComponent
  },
  {
  path: 'soap',
    component: SoapComponent
  },
  {
	path: '**', redirectTo: 'home'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
