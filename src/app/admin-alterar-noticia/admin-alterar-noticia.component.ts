import { AutoresService } from './../autores.service';
import { Autor } from './../autor.model';
import { NoticiasService } from './../noticias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-alterar-noticia',
  templateUrl: './admin-alterar-noticia.component.html',
  styleUrls: ['./admin-alterar-noticia.component.css']
})
export class AdminAlterarNoticiaComponent implements OnInit {
  noticia = null;
  titulo = null;
  autores = null;
  autor = null;
  resumo = null;
  conteudo = null;
  data = null;
  destaque = false;
  publicada = false;
  salvar_ok = false;
  salvar_erro = false;
  noticia_erro = false;

  constructor( private route: ActivatedRoute, private router: Router, private service: NoticiasService, private autores_service: AutoresService) { }

  ngOnInit() {
    this.autores = this.autores_service.todos();
    const id = this.route.snapshot.paramMap.get('id');
    this.service.encontrar(Number.parseInt(id)).subscribe( noticia =>{
      if (!noticia){
        this.router.navigate(['pagina-nao-encontrada']);
      }
      else{
        this.noticia = noticia;
        this.titulo = this.noticia.titulo;
        this.autor = this.noticia.autor;
        this.resumo = this.noticia.resumo;
        this.conteudo = this.noticia.conteudo;
        this.data = this.noticia.data;
        this.destaque = this.noticia.destaque;
        this.publicada = this.noticia.publicada;
        }
      },
      erro =>this.noticia_erro = true)
  }
  salvar (){
    let autor_obj = null;
    this.autores_service.encontrar(this.autor).subscribe(
      autor =>{ autor_obj = autor 
        this.service.alterar(this.noticia.id, this.titulo, this.resumo, this.conteudo, autor_obj, this.data,this.destaque, this.publicada).subscribe(
        autor => {
          this.salvar_ok = true;
        },
        erro => {
          console.log(erro);
          this.salvar_erro = true;
        }
      )
    }
  )
  }
}
