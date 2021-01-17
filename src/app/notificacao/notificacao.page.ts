import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.page.html',
  styleUrls: ['./notificacao.page.scss'],
})
export class NotificacaoPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public route : Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  notificacao(){
    this.route.navigate(['/notificacao']);
  }

  home() {
    this.route.navigate(['/folder/Inbox']);
  }

}
