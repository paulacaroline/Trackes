import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public route : Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  chamarPerfil(){
    this.route.navigate(['/perfil']);
  }

  home() {
    this.route.navigate(['/folder/Inbox']);
  }
}
