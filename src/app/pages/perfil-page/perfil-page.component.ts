import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent implements OnInit {

  private user: User;

  constructor(public usersService: UsersService) { }

  ngOnInit() {

        window.scroll(0,0)
    this.usersService.getUser(sessionStorage.getItem("currentCC")).subscribe(userResponse=>{
       this.user = userResponse;
    })
  }

}
