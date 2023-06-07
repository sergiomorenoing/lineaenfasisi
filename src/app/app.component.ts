/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { DataService } from './service/data.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService,private dataService:DataService) {
  }

  // Está funcion hace todo el proceso de lectura
  leerLocalStorage(nombre_tabla:string,id_llave:string){

    // tabla
    let base = localStorage.getItem(nombre_tabla);

    // si no existe la tabla zonas en el local storage, se crea y se le adjuntan los valores quemados que hallan en el service
    if (base == null) {
      localStorage.setItem(nombre_tabla,JSON.stringify(this.dataService[nombre_tabla]));
    } else {
      // Si si existe la tabla en el local storage entonces debemos leer esos datos y agregarlos al service

      //pasamos el string del storage a json
      let base_cargadas = JSON.parse(base);

      //obtenemos todos los ids que esten quemados en el service

      let data_service = JSON.parse(JSON.stringify(this.dataService[nombre_tabla]));

      let ids = [];

      // cambiar id por el campo llave
      for (let elemento_service of data_service) {
        ids.push(elemento_service[id_llave])
      }
      
      // recorremos los elementos de la base cargados para solo enviar al service los id unicos
      for (let elemento of base_cargadas) {
        if ( ids.indexOf(elemento[id_llave]) == -1 ) {
          this.dataService[nombre_tabla].push(elemento);
        }
      }  

    }
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    // Leer datos del localStorage
    // antes de replicar esta funcion con el resto de tablas, verificar que en el service ya se encuentre definido el objeto con algunos valores quemados
    
    // debemos replicar esta funcion por cada base, la primera es la de zonas, para esto se le debe de mandar el nombre que se puso al array en el service, y el nombre del campo llave

    this.leerLocalStorage("zonas","id");
    this.leerLocalStorage("habitats","id");
    this.leerLocalStorage("tipoVegetacion","id");

    // Fin cargue tabla zonas
    
    // Cada vez que realicen un add un remove, o un update etc. es importante que llamen luego a esta funcion del service para generar el ajuste en el localStorage

    
  }
}
