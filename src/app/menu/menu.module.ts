import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },

      {
  	    path: 'parametres',
  	    loadChildren: '../parametres/parametres.module#ParametresPageModule'
 	    },

 	    {
	     path: 'apropos',
	     loadChildren: '../apropos/apropos.module#AproposPageModule'
  	  },
        {
        path: 'authentification',
        loadChildren:'../authentification/authentification.module#AuthentificationPageModule'
      },

      {
        path: 'alarme',
        loadChildren: '../alarme/alarme.module#AlarmePageModule'
      },
      {
       path: 'home/favoris',
       loadChildren: '../favoris/favoris.module#FavorisPageModule'
      },
    ]
  },
  
  {
    path: '',
    redirectTo: '/menu/home'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})

export class MenuPageModule { }