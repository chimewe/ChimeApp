import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insectos',
  templateUrl: './insectos.page.html',
  styleUrls: ['./insectos.page.scss'],
})
export class InsectosPage implements OnInit {

  cards = [ 
    { id: 0, avatar: '/assets/monarch.png', img: '/assets/imagen.png', name: "Mariposa Monarca", info: "Mariposa linda"},
    { id: 1, avatar: '/assets/mantis.jpg_large', img: '/assets/imagen.png', name: "Mantis Orquídea", info: "Mantis linda"},
    { id: 2, avatar: '/assets/tarantula.png', img: '/assets/imagen.png', name: "Tarantula", info: "Tarantula linda"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
