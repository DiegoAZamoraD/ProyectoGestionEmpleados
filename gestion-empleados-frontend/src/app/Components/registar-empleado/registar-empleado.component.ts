import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Service/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado/empleado';
import Swal from 'sweetalert2';

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
        if(!dato){
          this.traerListaEmpleados()
          Swal(`Hubo un problema al crear el empleado`);
        }
        this.traerListaEmpleados()
        Swal(`Se creo correctamente el empleado`);
        
      },error => console.log(error)
      
    );
  }

  traerListaEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit(){
    this.guardarEmpleado()
    console.log(this.empleado)
    
  }

}
