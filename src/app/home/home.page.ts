import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

 import { PopoverController } from '@ionic/angular';  
 import { AlarmePage } from '../alarme/alarme.page';
  import { AuthentificationPage } from '../authentification/authentification.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  selectedSegment :string='Stations';
     constructor(private alarme:PopoverController, private authentification:PopoverController) {
      }

  segmentChanged(ev){
    console.log(ev.target.value);
    this.selectedSegment = ev.target.value;
  }
   ngOnInit() {
  }
   CreateAlarme()
   {
     this.alarme.create({component:AlarmePage,
     showBackdrop:false}).then((alarmeElement)=>{
       alarmeElement.present();
     })
   }

  
   CreateAuthentification()
   {
     this.authentification.create({component:AuthentificationPage,
     showBackdrop:false}).then((authentificationElement)=>{
       authentificationElement.present();
     })
   }


} 
