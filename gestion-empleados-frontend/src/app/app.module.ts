import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './Components/lista-empleados/lista-empleados.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistarEmpleadoComponent } from './Components/registar-empleado/registar-empleado.component'
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './Components/actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './Components/empleado-detalles/empleado-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
