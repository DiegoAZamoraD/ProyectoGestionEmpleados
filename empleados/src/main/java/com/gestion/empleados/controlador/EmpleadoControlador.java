package com.gestion.empleados.controlador;

import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.repositorio.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/")
public class EmpleadoControlador {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    //Listar todos los Empleados
    @GetMapping("/listarEmpleados")
    public List<Empleado> listarTodosLosEmpleados(){
        return empleadoRepository.findAll();
    }

    //Metodo para guardar un empleado
    @PostMapping("/guardarEmpleado")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado){
        return empleadoRepository.save(empleado);
    }
}
