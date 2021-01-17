import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.page.html',
  styleUrls: ['./comunidades.page.scss'],
})
export class ComunidadesPage implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  home(){
    this.route.navigate(['']);
  }
}
