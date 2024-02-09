import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../../models/Empleado/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  // Esta url obtiene la lista de empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/";

  constructor(
    private httpClient: HttpClient
    ) { }

  //Este metodo nos sirve para obtener los empleados
  // Es un metodo que retorna un Observable<Empleado[]>, es decir una lista de empleados
  obtenerListaEmpleados():Observable<Empleado[]>{
    let empleados: Observable<Empleado[]> = this.httpClient.get<Empleado[]>(`${this.baseURL}listarEmpleados`)
    return empleados;
  }

  //Este metodo nos sirve para registrar un empleado
  guardarEmpleado(empleado:Empleado): Observable<Object>{  
    let empleadoGuardado: Observable<Object> = this.httpClient.post(`${this.baseURL}guardarEmpleado`,empleado);
    return empleadoGuardado;
  }


}
