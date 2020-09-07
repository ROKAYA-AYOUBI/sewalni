import { Component, OnInit } from '@angular/core';
 import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {

 constructor(private apropos:PopoverController) {} 
   ngOnInit() {
   }
   CloseApropos()
   {
     this.apropos.dismiss();
   }
 } 

  
