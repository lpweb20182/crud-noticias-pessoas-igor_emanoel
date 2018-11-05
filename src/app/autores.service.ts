import { AutenticacaoService } from './api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Database } from './database.model';
import { map } from 'rxjs/operators';
import { Autor } from './autor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  API_URL = 'http://localhost:8000/api/pessoas/';

  constructor(private http: HttpClient, private auth: AutenticacaoService) { }

  private getHeaders() {
    const credenciais = this.auth.getCredenciais();
    if (credenciais) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa(`${credenciais.username}:${credenciais.password}`)
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
    }
  }
  public todos() {
    return this.http.get(this.API_URL);
  }

  public encontrar(id: number) {
    return this.http.get(this.API_URL + id + '/');
  }
  public salvar(nome: string, email: string){
    const options = this.getHeaders();
    const autor = {
      nome: nome,
      email: email
    };
    return this.http.post(this.API_URL,autor, options)
  }

  public excluir (autor: Autor){
    const options = this.getHeaders();
    let url =this.API_URL + autor.id + '/'
    console.log(url);
    return this.http.delete(url, options)

  }

  public alterar(id:Number, nome: String, email:String){
    const options = this.getHeaders();
    let url =this.API_URL + id + '/'
    const autor = {
      nome: nome,
      email: email
    };
    return this.http.put(url, autor, options)

  }
}
