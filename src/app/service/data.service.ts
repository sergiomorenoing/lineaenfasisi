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

  constructor() { }
}
