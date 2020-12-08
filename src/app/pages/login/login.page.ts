import { Component, OnInit, ViewChild } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonSlides, LoadingController, MenuController, ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { ServiceService } from '../../Service/service.service';
import { AlertController } from '--node_modules/@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  
  get nome() {
    return this.registrationForm.get("nome");
  }
  get email() {
    return this.registrationForm.get("email");
  }
  get telefone() {
    return this.registrationForm.get('telefone');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  public errorMessages = {
    nome: [
      { type: 'required', message: 'Por favor, digite o nome' },
      { type: 'maxlength', message: 'O máximo de caracteres é 33 ' }
    ],
    email: [
      { type: 'required', message: 'Por favor, digite o email' },
      { type: 'pattern', message: 'Digite um email válido' }
    ],
    telefone: [
      { type: 'required', message: 'Por favor, digite o telefone' },
      { type: 'pattern', message: 'Digite um telefone válido' }
    ],
    password: [
      { type: 'required', message: 'Por favor, digite a senha' },
      { type: 'pattern', message: 'O máximo de caracteres são 8' }
    ],
  };
  
  registrationForm = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
    email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z0]{2,})$'), Validators.required])],
    telefone: ['', [Validators.required, Validators.maxLength(11)]],
    password: ['', [Validators.required, Validators.maxLength(8)]]
 });
  
  async register() {
    this.registrationForm.valid
    await this.presentLoading();

    this.Servi.postUsuario(this.registrationForm.value);
    //this.loading.dismiss();
  }

  capturaCadastro(){

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({message: 'Cadastrando...',
      duration: 4000});
    return this.loading.present();
  }


  constructor(public keyboard: Keyboard,
              private formBuilder: FormBuilder,
              private loadingCtrl: LoadingController,
              private _menu: MenuController,
              public Servi:ServiceService,
              public alertCtrl: AlertController,
              ) { }

  ngOnInit() {
    this._menu.swipeGesture(false);
  
    
   }

  segmentChanged(event: any) {
    if (event.detail.value === "login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  } 


  async login() {
    if(this.userLogin.email == undefined || this.userLogin.password == undefined){
        const alert = await this.alertCtrl.create({
          cssClass: 'my-custom-class',
          header: 'Atenção',
          message: 'Para efetuar o login, é nessário preencher todos os campos!',
          buttons: ['Entendi']
        });
        await alert.present();
      }else{

        

    }
  }
  
}
