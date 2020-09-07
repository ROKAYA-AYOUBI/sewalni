import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { PopoverController } from '@ionic/angular';  
import { AproposPage } from '../apropos/apropos.page';   
 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [

    {
      name: 'Accueil',
      path: '/menu/home'
    },
     {
      name: 'Parametres',
      path: '/menu/parametres'
    }
  ]

 constructor(private router: Router, private apropos:PopoverController) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
  }
 CreateApropos()
   {
     this.apropos.create({component:AproposPage,
     showBackdrop:false}).then((aproposElement)=>{
       aproposElement.present();
     })
   }
} 