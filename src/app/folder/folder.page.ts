import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public route : Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  chamarTrilha(){
    this.route.navigate(['/trilha']);
  }

  chamarPerfil(){
    this.route.navigate(['/perfil']);
  }

  notificacao(){
    this.route.navigate(['/notificacao']);
  }

  telaComunidade(){
    this.route.navigate(['/comunidades']);
  }
}
