import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-vistarolgestor',
  templateUrl: './vistarolgestor.component.html',
  styleUrls: ['./vistarolgestor.component.scss']
})
export class VistarolgestorComponent implements OnInit {


   constructor(
    private titleService: Title,

  ) {
    this.titleService.setTitle('ROL GESTOR');

  }

  ngOnInit(): void {
  }


}
