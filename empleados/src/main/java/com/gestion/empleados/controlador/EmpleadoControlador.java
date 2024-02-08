package com.gestion.empleados.controlador;

import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.repositorio.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("/*")
@RequestMapping("/api/v1/")
public class EmpleadoControlador {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    //Listar todos los Empleados
    @GetMapping("/empleados")
    public List<Empleado> listarTodosLosEmpleados(){
        return empleadoRepository.findAll();
    }
}
