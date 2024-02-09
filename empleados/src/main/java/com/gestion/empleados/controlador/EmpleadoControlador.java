package com.gestion.empleados.controlador;

import com.gestion.empleados.excepciones.ResourceNotFoundException;
import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.repositorio.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    //Metodo para encontrar un empleado por id
    @GetMapping("/empleado/{id}")
    public ResponseEntity<Empleado> buscarEmpleadoPorId(@PathVariable Long id){
        Empleado empleado = empleadoRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe el " +
                "empleado con id: " + id));
        return ResponseEntity.ok(empleado);
    }

    @PutMapping("/actualizarEmpleado/{id}")
    public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id, @RequestBody Empleado empleado){
        Empleado empleadoEncontrado = empleadoRepository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("No existe el " +
                "empleado con id: " + id));
        empleadoEncontrado.setNombre(empleado.getNombre());
        empleadoEncontrado.setApellido(empleado.getApellido());
        empleadoEncontrado.setEmail(empleado.getEmail());
        empleadoRepository.save(empleadoEncontrado);
        return ResponseEntity.ok(empleadoEncontrado);
    }

    @DeleteMapping("/eliminarEmpleado/{id}")
    public void eliminarEmpleado(@PathVariable Long id){
        Empleado empleado = empleadoRepository.findById(id).orElseThrow(()->new RuntimeException("No existe un empleado" +
                "asociado al ID: " + id));
        empleadoRepository.delete(empleado);
    }
}
