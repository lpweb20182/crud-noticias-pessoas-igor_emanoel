import { AutoresService } from './../autores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from './../autor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-alterar-autor',
  templateUrl: './admin-alterar-autor.component.html',
  styleUrls: ['./admin-alterar-autor.component.css']
})
export class AdminAlterarAutorComponent implements OnInit {

  autor = null;
  nome = null ;
  email = null;
  autor_erro = false;
  salvar_ok = false;
  salvar_erro = false; 

  constructor( private route: ActivatedRoute, private router: Router, private service: AutoresService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.encontrar(Number.parseInt(id)).subscribe(autor => {
      if (!autor) {
        this.router.navigate(['pagina-nao-encontrada']);
      } else {
        this.autor = autor;
        this.nome=this.autor.nome;
        this.email=this.autor.email;
      }
    },
    erro => this.autor_erro = true);
  }

  salvar (){
    this.service.alterar(this.autor.id, this.nome, this.email).subscribe(
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
