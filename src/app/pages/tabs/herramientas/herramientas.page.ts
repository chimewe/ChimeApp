import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {

  items = [
    { id: 0, name: 'Red', box: false, src: "/assets/red.png"},
    { id: 1, name: 'Pala', box: true, src: '/assets/pala.png' },
    { id: 2, name: 'Regadera', box: false, src: '/assets/regadera.png' },
    { id: 3, name: 'Hacha', box: true, src: '/assets/hacha.png' },
    { id: 4, name: 'Caña', box: true, src: '/assets/cana.png' }
  ]
   
  constructor() {}

  ngOnInit() {
  }

}
