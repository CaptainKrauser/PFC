import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceService } from '../../Service/service.service';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() data: any;
  dados: any = [];

  constructor(
    private modalController: ModalController, public Servi: ServiceService) { }

  ngOnInit() {

     this.Servi.getPublicacaoId(this.data).subscribe(response =>{this.dados = response})

  }

  async close() {
    this.modalController.dismiss();

  }
}