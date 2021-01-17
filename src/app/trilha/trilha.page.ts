import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-trilha',
  templateUrl: './trilha.page.html',
  styleUrls: ['./trilha.page.scss'],
})
export class TrilhaPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public toastControler : ToastController, private route : Router) { }

  ngOnInit() {
  }

  async acaoTrilha(){
    const toast = await this.toastControler.create({
      message: 'Parabéns, agora você tem um conteúdo focado desta trilha para você',
      duration: 4000,
      position: 'top',
      buttons: [
        {
          side:'start',
          icon:'star',
          text: 'Ok',
        }
      ]
    });
    toast.present();
    this.route.navigate(['/trilhafocada']);
  }

  home() {
    this.route.navigate(['/folder/Inbox']);
  }
}
