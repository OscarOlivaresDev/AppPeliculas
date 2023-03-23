import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PeliculaComponent } from './paginas/pelicula/pelicula.component';
import { BuscarComponent } from './paginas/buscar/buscar.component';

const routes:Routes=[

  {path: 'home', component: HomeComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},

  {path: '', pathMatch:'full', redirectTo: '/home'},
  {path: '**', pathMatch:'full', redirectTo: '/home'},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }