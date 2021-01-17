import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trilhafocada',
  templateUrl: './trilhafocada.page.html',
  styleUrls: ['./trilhafocada.page.scss'],
})
export class TrilhafocadaPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, public route : Router) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  telaDesafios() {
    this.route.navigate(['/desafios']);
  }

  home(){
    this.route.navigate(['']);
  }
}
