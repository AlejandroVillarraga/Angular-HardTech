import { Component, OnInit } from '@angular/core';
import { ObjetoService } from '../../services/objeto.service';
import { Objeto } from '../../models/objeto';

@Component({
  selector: 'app-objetos-page',
  templateUrl: './objetos-page.component.html',
  styleUrls: ['./objetos-page.component.css']
})
export class ObjetosPageComponent implements OnInit {

  private objetoList: Objeto[] = [];

  constructor(public objetoService: ObjetoService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.objetoService.getObjetos().subscribe(objetoResponse=>{
       this.objetoList = objetoResponse;
    })
  }

  saveCategory(title: string){
    sessionStorage.setItem("categoryName", title);
  }

}
