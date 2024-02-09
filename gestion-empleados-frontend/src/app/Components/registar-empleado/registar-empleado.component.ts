import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Service/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado/empleado';

@Component({
  selector: 'app-registar-empleado',
  templateUrl: './registar-empleado.component.html',
  styleUrls: ['./registar-empleado.component.css']
})
export class RegistarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  
  constructor(
    private empleadoService:EmpleadoService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoService.guardarEmpleado(this.empleado).subscribe(
      dato => {
        console.log(dato)
        this.traerListaEmpleados()
      },error => console.log(error)
    )
  }

  traerListaEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onsubmit(){
    this.guardarEmpleado()
    console.log(this.empleado)
    
  }

}
