import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.page.html',
  styleUrls: ['./parametres.page.scss'],
})
export class ParametresPage implements OnInit {

 selectedSegment2 :string='Profil';
     constructor() {}

  segmentChanged(ev){
    console.log(ev.target.value);
    this.selectedSegment2 = ev.target.value;
  }


	ngOnInit() {
  	}


 

}