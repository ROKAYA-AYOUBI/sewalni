import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

   selectedSegment2 :string='heart';

     constructor() {
      }

  segmentChanged2(ev){
    console.log(ev.target.value);
    this.selectedSegment2 = ev.target.value;
  }
   ngOnInit() {
  }
 }