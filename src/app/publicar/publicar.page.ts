import { LoadingController, NavController } from '--node_modules/@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ServiceService } from '../Service/service.service';


@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.page.html',
  styleUrls: ['./publicar.page.scss'],
})
export class PublicarPage implements OnInit {

  titulo: string;
  imagem: string;
  descricao: string;
  cep: string;
  contato: string;

  dados = {
    "id": null,
    "imagem": null,
    "titulo": null,
    "descricao": null,
    "cep": null,
    "contato": null,
    "usuario": { "id": null }
  }
  router: any;
  loading: HTMLIonLoadingElement;

  constructor(public Servi: ServiceService,
              public navCtrl: NavController,
              public loadingController: LoadingController,
              public alertCtrl: AlertController) { }

  async publicar() {
    if(this.descricao == undefined || this.cep == undefined || this.titulo == undefined || this.contato == undefined){
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'Atenção',
        message: 'Para realizar a postagem, é nessário preencher todos os campos!',
        buttons: ['Entendi']
      });
      await alert.present();
    }else{
      
      this.dados = {
        "id": null,
        "imagem": this.getbase64(),
        "titulo": this.titulo,
        "descricao": this.descricao,
        "cep": this.cep,
        "contato": this.contato,
        "usuario": { "id": 1 }
        }
        this.Servi.postPublicacao(this.dados);
  }
}
  
    

  getbase64() {

    return ''
  };


  ngOnInit() {
  }
  
  
  }

