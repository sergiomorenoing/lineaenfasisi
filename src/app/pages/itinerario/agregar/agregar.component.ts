import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'ngx-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  
itinerario= {
  codigo:'',
  fecha_inicio:'yyyy-MM-dd',
  hora_inicio:'',
  fecha_fin:'yyyy-MM-dd',
  hora_fin:'',
  longitud:'',
  visitante:'',
  guia:'',
}



  constructor(public dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    if(this.dataService.itinerarioCurrent){
      this.itinerario=JSON.parse(JSON.stringify(this.dataService.itineraroCurrent));
    }
  }
  guardar(){
    let mensaje=''
    if(this.dataService.itinerarioCurrent){
      this.dataService.itinerario[this.dataService.itinerarioCurrentPos]=this.itinerario;
      this.dataService.itinerarioCurrent=null;
      this.dataService.itinerarioCurrentPos=null;
      mensaje='Se ha editado el usuario';
    }else{
      this.dataService.itinerario.push(this.itinerario);
      mensaje='Se ha guardado el itineario'
      alert(JSON.stringify(this.itinerario));
    }
    Swal.fire(
      'Buen trabajo!',
      mensaje,
      'success'
    )
    this.router.navigate(['/pages/itinerario/listar']);
    
  }


}
