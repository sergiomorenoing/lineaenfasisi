import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  nombre: string;
  clima: string;
  tipoVegetacion: any;
  listTipoVegetacion: any;
  habitatAdd: any;

  constructor(public dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.tipoVegetacion = "";
    this.listTipoVegetacion = this.dataService.tipoVegetacion;
  }

  add(){
    this.habitatAdd = {
      id: Math.floor(Math.random() * 100),
      clima: this.clima,
      idTipoVegetacion: this.tipoVegetacion,
      nombre: this.nombre,
      tipoVegetacion: this.dataService.tipoVegetacion.find(x => x.id == this.tipoVegetacion).value
    }

    this.dataService.habitats.push(this.habitatAdd);
    this.dataService.generarActualizacionLocalStorage("habitats", this.dataService.habitats);

    this.router.navigate(['/pages/habitat/list']);
  }

  goBack() {
    this.router.navigate(['/pages/habitat/list']);
  }

}
