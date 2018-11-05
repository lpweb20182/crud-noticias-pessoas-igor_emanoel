import { Component, OnInit } from '@angular/core';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-admin-cadastrar-autor',
  templateUrl: './admin-cadastrar-autor.component.html',
  styleUrls: ['./admin-cadastrar-autor.component.css']
})
export class AdminCadastrarAutorComponent implements OnInit {

  nome = null;
  email = null;
  salvar_ok = false;
  salvar_erro = false;

  constructor(private autores_services: AutoresService) { }

  ngOnInit() {
  }

  salvar(){
    this.autores_services.salvar(this.nome, this.email).subscribe(
      autor => {
        this.salvar_ok = true;
      },
      erro => {
        console.log(erro);
        this.salvar_erro = true;
      }
    )
  }
}