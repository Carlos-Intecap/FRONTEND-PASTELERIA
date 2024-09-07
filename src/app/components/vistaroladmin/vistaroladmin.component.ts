import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-vistaroladmin',
  templateUrl: './vistaroladmin.component.html',
  styleUrls: ['./vistaroladmin.component.scss']
})
export class VistaroladminComponent implements OnInit {


  constructor(
    private titleService: Title,

  ) {
    this.titleService.setTitle('ROL ADMIN');

   }

  ngOnInit(): void {
  }


}
