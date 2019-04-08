import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {Servicio} from '../model/servicio.model';
import { servicio } from '../model/servicio.json';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  notificacion: EventEmitter< Servicio[] > = new EventEmitter();
  update: EventEmitter< Servicio[] > = new EventEmitter();
  delete: EventEmitter< Servicio[] > = new EventEmitter();

  filtro: EventEmitter< number > = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
  ) { }

  getServicios(): Observable< Servicio[] > {
    return of( servicio );
  }
  guardarServicio( dataservicio: Servicio ) {
    if ( servicio.filter( ( ser ) => ser.id === dataservicio.id  ).length > 0 ) {
      const indexServicio = servicio.findIndex( ( ser ) => ser.id === dataservicio.id );
      servicio.splice( indexServicio, 1, dataservicio );
      this.update.emit( servicio );
    } else {
      const tipo = Math.floor( Math.random() * 3 ) + 1;
      const nuevoServicio = servicio.push( { ...dataservicio, tipo } );
      this.notificacion.emit( servicio );
    }
  }

  eliminarServicio( id: number ) {
    const eliminado = servicio.findIndex( ( ser ) => ser.id === id );
    servicio.splice( eliminado, 1 );
    const nuevosDatos = [ ...servicio ];
    this.delete.emit( nuevosDatos );
  }
}
