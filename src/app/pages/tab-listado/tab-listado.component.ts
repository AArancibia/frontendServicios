import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../services/servicios.service';

@Component({
  selector: 'app-tab-listado',
  templateUrl: './tab-listado.component.html',
  styleUrls: ['./tab-listado.component.scss']
})
export class TabListadoComponent implements OnInit {

  constructor(
    private servicioService: ServiciosService,
  ) { }

  ngOnInit() {
  }

  asignarValor( valor: number ) {
    this.servicioService.filtro.emit( valor );
  }

}
