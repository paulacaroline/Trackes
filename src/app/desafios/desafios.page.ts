import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desafios',
  templateUrl: './desafios.page.html',
  styleUrls: ['./desafios.page.scss'],
})
export class DesafiosPage implements OnInit {

  constructor(private hm : Router) { }

  ngOnInit() {
  }

  home(){
    this.hm.navigate(['']);
  }
}
