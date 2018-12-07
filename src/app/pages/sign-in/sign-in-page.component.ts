import { Component, OnInit } from '@angular/core';


import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})



export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup;
    public loginError: string;
    public loader: string;
    public perm : string;


  constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signInForm = new FormGroup({
        cc: new FormControl(),
        password: new FormControl()
    });

  }

  doLogin() {
        this.loader="Cargando ...";

    this.usersService.getUserPermission(this.signInForm.get('cc').value).subscribe(usersResponse=>{
       this.perm = usersResponse;
    })
    sessionStorage.setItem("currentCC", this.signInForm.get('cc').value);
    sessionStorage.setItem("permission", this.perm);
    console.log(sessionStorage.getItem("permission"));
    this.loginError="";
    this.usersService.login(
      this.signInForm.get('cc').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['objetos']);
      }, error => {
        this.loader="Ingresa";
        this.loginError = "Error al ingresar, por favor verifica tu correo y contraseña";
      })
  }


    ngOnInit() {
        window.scroll(0,0)
        this.loginError="";
        this.loader="Ingresa";
  }
}