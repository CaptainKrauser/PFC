import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) {


  }

  url = "http://localhost:8090/api/";
  dados: any = [];

  getPublicacao() {
    return this.http.get(this.url + "publicacao");
  }

  getPublicacaoId(id) {
    return this.http.get(this.url + "publicacao/" + id)
  }

  postPublicacao(publicacao) {
    return this.http.post(this.url + "publicacao", publicacao).subscribe(response => {

    });
  }

  postUsuario(usuario) {

    return this.http.post(this.url + "login", usuario).subscribe(response => { });
  }

  urlGet(){
    return this.url;

  }
}