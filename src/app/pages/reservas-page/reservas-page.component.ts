import { Component, OnInit } from '@angular/core';

import { ObjetoService } from '../../services/objeto.service';
import { Objeto } from '../../models/objeto';
import { Router } from '@angular/router';

import { AuthService } from '../../common/auth.service';


@Component({
  selector: 'app-reservas-page',
  templateUrl: './reservas-page.component.html',
  styleUrls: ['./reservas-page.component.css']
})
export class ReservasPageComponent implements OnInit {

  private loader: string;
  private objeto: Objeto;

  constructor(public objetoService: ObjetoService, public router: Router, public authService: AuthService) { }

  ngOnInit() {

    this.loader = "RESERVALO YA";
        window.scroll(0,0)
    console.log("Holaaa");

    console.log(sessionStorage.getItem("categoryName"));
    this.objetoService.getObjeto(sessionStorage.getItem("categoryName")).subscribe(objetoResponse=>{
        console.log(objetoResponse);
       this.objeto = objetoResponse;
    })
  }

  makeAReservation(title: string){
    sessionStorage.setItem("makeAReservation", title);
    this.objetoService.makeAReservation(title).subscribe(objetoResponse=>{

    })

  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

}
