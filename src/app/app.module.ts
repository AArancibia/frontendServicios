import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabListadoComponent} from './pages/tab-listado/tab-listado.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import { ListadoItemsComponent } from './pages/listado-items/listado-items.component';
import { FormComponent } from './components/form/form.component';
import {HttpClientModule} from '@angular/common/http';
import {ServiciosService} from './services/servicios.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabListadoComponent,
    InicioComponent,
    ListadoItemsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
