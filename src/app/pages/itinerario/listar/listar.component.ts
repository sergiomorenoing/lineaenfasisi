import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'ngx-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  

  constructor(private router:Router, public dataService:DataService) { }

  ngOnInit(): void {
  }
  agregar(){
    this.dataService.itinerrioCurrent=null;
    this.dataService.itinerarioCurrentPos=null;
    this.router.navigate(['/pages/itinerario/agregar']);
  }
  editar(index:any,itineario:any){
    this.dataService.itinerarioCurrentPos=index;
    this.dataService.itinerarioCurrent=itineario;
    this.router.navigate(['/pages/itinerario/agregar']);
  }
  eliminar(index : any){

    Swal.fire({
      title: 'Estas seguro de eliminar el itineario?',
      text: "Esta operación no se puede revetir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataService.itinerarioCurrent=null;
        this.dataService.itinerarioCurrentPos=null;
        this.dataService.itineario.splice(index,1)
        Swal.fire(
          'Eliminado!',
          'El itinerario ha sido eliminado de la base de datos',
          'success'
        )
      }
    })

    
    // this.router.navigate(['/pages/user/add']);
  }
}


