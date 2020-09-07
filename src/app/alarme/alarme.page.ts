import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.page.html',
  styleUrls: ['./alarme.page.scss'],
})
export class AlarmePage implements OnInit {

   constructor(private alarme:PopoverController) {} 

   ngOnInit() {
   }

   CloseAlarme()
   {
     this.alarme.dismiss();
   }

 } 
