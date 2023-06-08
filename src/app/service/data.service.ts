import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Funcion para actualizar cualquier cambio en el local storage, se le debe pasar el nombre del array y el propio array
  generarActualizacionLocalStorage(nombre_tabla:string,baseServie:any){
    localStorage.setItem(nombre_tabla,JSON.stringify(baseServie));
  }

  zonas = [
    {
      id: "0",
      nombre: "Helada",
      especies: "Pinguino, Totuga, Tiburon",
      extension: "14,5km",
    },
    {
      id: "1",
      nombre: "Sabana",
      especies: "Rinoceronte, Tigre, Cebra",
      extension: "44,0km",
    },
    {
      id: "2",
      nombre: "Aerea",
      especies: "Aguila, Condor",
      extension: "60,9km",
    }
];


intinerarios = [
  {
    codigo:'0',
    fecha_inicio: '26/06/2023',
    hora_inicio:'14:00',
    fecha_final:'26/06/2023',
    hora_final:'15:00',
    longitud:'3',
    visitantes:'20',
    guia:'Mario',
  },
  {
    codigo:'1',
    fecha_inicio: '27/06/2023',
    hora_inicio:'15:00',
    fecha_final:'27/06/2023',
    hora_final:'16:00',
    longitud:'4',
    visitantes:'45',
    guia:'Luisa',
  },
  {
    codigo:'2',
    fecha_inicio: '30/06/2023',
    hora_inicio:'18:00',
    fecha_final:'6/07/2023',
    hora_final:'19:00',
    longitud:'20',
    visitantes:'15',
    guia:'Eugenia',
  }
]

habitats = [
  { id: "1", nombre: "Aéreo", clima: "Tropical Húmedo", idTipoVegetacion: "1", tipoVegetacion: "Bosque Templado" },
  { id: "2", nombre: "Terrestre", clima: "Mediterráneo", idTipoVegetacion: "2", tipoVegetacion: "Selva Húmeda" },
  { id: "3", nombre: "Acuático", clima: "Oceánico", idTipoVegetacion: "3", tipoVegetacion: "Manglar" },
];

tipoVegetacion = [
  { id: 1, value:"Bosque Templado" },
  { id: 2, value:"Selva Húmeda" },
  { id: 3, value:"Manglar" }

];

zonaActual:any;
zonaActualPos:any;

itinerarioActual:any;
itinerarioActualPos:any;

  constructor() { }
}


