import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
