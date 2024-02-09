import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './Components/lista-empleados/lista-empleados.component';
import { RegistarEmpleadoComponent } from './Components/registar-empleado/registar-empleado.component';

const routes: Routes = [
  {path : 'empleados', component:ListaEmpleadosComponent},
  {path: '', redirectTo: 'empleados', pathMatch:'full'},
  {path: 'registrar-empleado',component:RegistarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
