import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {InicioComponent} from './pages/inicio/inicio.component';
import {FormComponent} from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'servicios',
        component: InicioComponent
      },
      {
        path: '',
        redirectTo: 'servicios',
        pathMatch: 'full'
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
