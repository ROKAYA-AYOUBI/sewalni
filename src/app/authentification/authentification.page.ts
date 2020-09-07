import { Component, OnInit } from '@angular/core';

import {PopoverController} from '@ionic/angular';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

    selectedSegment :string='Connecter';
  constructor(private alarme:PopoverController) { }

  ngOnInit() {
  }
     CloseAlarme()
   {
     this.alarme.dismiss();
   }

  segmentChanged(ev){
    console.log(ev.target.value);
    this.selectedSegment = ev.target.value;
  }
}
