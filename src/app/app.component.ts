import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Feed',
      url: 'home',
      icon: 'home'
    },
    {
      title: 'Publicar',
      url: 'publicar',
      icon: 'clipboard'
    },
    {
      title: 'Minha Conta',
      url: 'Conta',
      icon: 'settings'
    },
    {
      title: 'Logout',
      url: 'Configurecao',
      icon: 'log-out'
    }
  ];

  public labels = [
    { title: 'Sobre o Pet App', url: 'sobre', icone: 'help-circle' },
    { title: 'Dicas de Segurança', url: 'seguranca', icone: "shield-checkmark" },
    { title: 'Termos de Uso', url: 'termos', icone: "reader" }];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
