import {Component, Input, OnInit} from '@angular/core';
import {Servicio} from '../../model/servicio.model';
import {ServiciosService} from '../../services/servicios.service';
import {servicio} from '../../model/servicio.json';

@Component({
  selector: 'app-listado-items',
  templateUrl: './listado-items.component.html',
  styleUrls: ['./listado-items.component.scss']
})
export class ListadoItemsComponent implements OnInit {
  dataServicios: Servicio[];
  servicio: Servicio = new Servicio();
  constructor(
    private servicioService: ServiciosService,
  ) { }

  ngOnInit() {
    this.getServicios();
    this.servicioService.filtro.subscribe( ( tipo ) => {
      this.getServicios();
      if ( tipo === 0) return;
      const newData = this.dataServicios.filter( ( servicio ) => servicio.tipo === tipo );
      this.dataServicios = newData;
    });
    this.servicioService.notificacion.subscribe( ( servicios ) => this.dataServicios = servicios );
    this.servicioService.update.subscribe( ( servicios ) => this.dataServicios = servicios );
    this.servicioService.delete.subscribe( ( servicios ) => this.dataServicios = servicios );
  }

  getServicios() {
    this.servicioService.getServicios().subscribe( ( servicios: Servicio[] ) => this.dataServicios = servicios );
  }

  enviarDatos( servicio: Servicio ) {
    this.servicio = {...servicio};
  }

  eliminarDatos( id: number ) {
    this.servicioService.eliminarServicio( id );
  }

}
