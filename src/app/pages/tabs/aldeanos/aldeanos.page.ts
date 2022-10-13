import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aldeanos',
  templateUrl: './aldeanos.page.html',
  styleUrls: ['./aldeanos.page.scss'],
})
export class AldeanosPage implements OnInit {

  box1:boolean = false;
  box2:boolean =  true;
  box3:boolean = false;
  box4:boolean =  true;
  box5:boolean = true;

  constructor(private toastController: ToastController){}
    
  ngOnInit() {

  }

  async presentToast(nombreAldeano: string, seleccionado: boolean) { // método para mostrar la toast

    let toastOptions;

    if(seleccionado){ // si el checkbox está deseleccionado 
      toastOptions = { // las opciones del toast serán así
        message: 'Has deseleccionado a ' + nombreAldeano, 
        duration: 2000,
        cssClass: 'claseToast'
      }
    }else{ // si está seleccionado
      toastOptions = {
        message: 'Has seleccionado a ' + nombreAldeano,
        duration: 2000,
        cssClass: 'claseToast'
      }
    }

    const toast = await this.toastController.create(toastOptions); // creamos el toast

    await toast.present(); // y lo mostramos con el present
  }

}


