import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  Id_Zona:number;
  NombreZona:string;
  Extension:number;

  constructor() { }

  ngOnInit(): void {
  }

}
