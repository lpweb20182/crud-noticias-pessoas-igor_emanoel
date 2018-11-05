import { AdminCadastrarAutorComponent } from './../admin-cadastrar-autor/admin-cadastrar-autor.component';
import { Autor } from './../autor.model';
import { Router } from '@angular/router';
import { AutoresService } from './../autores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-autor',
  templateUrl: './admin-autor.component.html',
  styleUrls: ['./admin-autor.component.css']
})
export class AdminAutorComponent implements OnInit {

  autores$ = null;
  autor = null;
  salvar_ok = false;
  salvar_erro = false;
  constructor(private service: AutoresService ,private router: Router) { }


  ngOnInit() {    this.autores$ = this.service.todos();

  }

  delete (autor: Autor){
    this.service.excluir(autor).subscribe(
      autor => {
        this.salvar_ok = true;
      },
      erro => {
        console.log(erro);
        this.salvar_erro = true;
      }
    );
  
    
  }
}
