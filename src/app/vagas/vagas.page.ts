import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.page.html',
  styleUrls: ['./vagas.page.scss'],
})
export class VagasPage implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  home(){
    this.route.navigate(['']);
  }
}
