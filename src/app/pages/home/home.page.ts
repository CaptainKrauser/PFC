import { Component, OnInit, ɵgetLocalePluralCase } from '@angular/core';
import { Data } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/componentes/modal/modal.component';
import { ServiceService } from '../../Service/service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dados: any = [];
  idPublic = '';
  constructor(public modalController: ModalController, public Servi: ServiceService) { }

    chamarModal(id){
      this.modalController.create({
        component: ModalComponent,
        componentProps: { data: id
        }
      }).then(modal => modal.present());
     
  }

  ngOnInit() { 
    this.Servi.getPublicacao().subscribe(data => {this.dados = data});
   }
  
 
}