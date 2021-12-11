import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/consumo/models/cliente.models';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  cliente: Cliente[]= [];

  ClienteForm!: FormGroup;

  
  
  constructor(private fb:FormBuilder, private clienteService: ClienteService) { }

  
  ngOnInit(): void {
    this.ClienteForm=this.fb.group({
      nombre: [''],
      username: [''],
      correo: [''],
      password: ['']
    })
  }

  enviar(){
    console.log("this.ClienteForm.value")
    this.clienteService.enviarCliente(this.ClienteForm.value).subscribe((data: any) =>{
      console.log(data)
    })
  }
}