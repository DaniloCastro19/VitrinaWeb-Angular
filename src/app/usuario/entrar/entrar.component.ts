import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/consumo/models/cliente.models';
import { EventEmitter } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
  
  loginForm!: FormGroup;

  // @Output() onNuevoCliente: EventEmitter<Cliente> = new EventEmitter();

  constructor(private fb:FormBuilder, private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username: [''],
      password: ['']
    })
  }

  
  entrar(){
    console.log(this.loginForm.value)
    this.usuarioService.entrar(this.loginForm.value).subscribe((data: any) =>{

      console.log(data)
      if(data.mensaje=="Accedió correctamente"){
       this.router.navigateByUrl('home')
      }else{
        alert(data.mensaje)
      }
    })
  }
}
