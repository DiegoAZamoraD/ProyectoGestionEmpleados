import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/Service/empleado/empleado.service';
import { Empleado } from 'src/app/models/Empleado/empleado';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  id:number;
  empleado:Empleado = new Empleado();
  constructor(private empleadoService:EmpleadoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoporId(this.id).subscribe(dato =>{
      this.empleado = dato;
    },error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      if(!dato){
        swal(`hubo un problema al actualizar el empleado ${this.empleado.nombre}`);
      }
      swal(`El empleado se actualizo correctamente ${this.empleado.nombre}`);
      this.irAlaListaDeEmpleados();
    },error => console.log(error));
  }

}
