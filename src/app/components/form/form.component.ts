import {Component, Input, OnInit} from '@angular/core';
import {Servicio} from '../../model/servicio.model';
import {NgForm} from '@angular/forms';
import {ServiciosService} from '../../services/servicios.service';
import {servicio} from '../../model/servicio.json';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formServicio: Servicio;

  constructor(
    private servicioService: ServiciosService,
  ) { }

  ngOnInit() {
  }

  guardar( form: NgForm ) {
    if ( form.invalid ) return;
    const dataServicio: Servicio = form.value;
    console.log( dataServicio);
    if ( !dataServicio.id ) {
      const { id } = servicio[ servicio.length - 1 ];
      dataServicio.id = id + 1;
      const newServicio = this.servicioService.guardarServicio( dataServicio );
    } else {
      dataServicio.tipo = this.formServicio.tipo;
      this.servicioService.guardarServicio( dataServicio );
    }
    form.reset();
  }

}
