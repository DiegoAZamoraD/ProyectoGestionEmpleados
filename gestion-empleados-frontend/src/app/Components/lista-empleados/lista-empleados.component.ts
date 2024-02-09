import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado/empleado';
import { EmpleadoService } from '../../Service/empleado/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(
    private empleadoService:EmpleadoService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.obtenerListaEmpleados()
  }

  // este metodo obtiene la lista de empleados nos suscribimos al observable que tra y a la lista
  // de emepleados que tiene lo guardamos en dato y ese dato se lo pasamos a la variable empleados
  private obtenerListaEmpleados(){
    this.empleadoService.obtenerListaEmpleados().subscribe(
      dato => {
        console.log("la Data es :", dato)
        this.empleados = dato;
      }
    )
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  eliminarEmpleado(id:number){
    this.empleadoService.eliminarEmpleado(id).subscribe(
      dato => {
        this.obtenerListaEmpleados()
        console.log(dato)
      }
      
    );
  }

  verDetallesDelEmpleado(id:number){
    this.router.navigate(['empledo-detalles',id])
  }

}
