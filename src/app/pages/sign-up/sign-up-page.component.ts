import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent implements OnInit {
    public signUpForm: FormGroup;
    public error: string;
    public loader: string;


  constructor(public formBuilder:FormBuilder,public usersService: UsersService,public router: Router) {
    this.signUpForm = new FormGroup({
        name: new FormControl(),
        cc: new FormControl(),
        password: new FormControl(),

    });

  }

  signUp() {
    this.loader="Cargando ...";
    sessionStorage.setItem("currentCC", this.signUpForm.get('cc').value);
    this.usersService.getUser(this.signUpForm.get('cc').value).subscribe(loginResponse => {

                        this.error="Esta cédula ya esta registrado en el sistema.";

                        this.loader="Registrate";
                }, error => {

                   this.usersService.signUp(
                      this.signUpForm.get('cc').value,
                      this.signUpForm.get('password').value,
                      this.signUpForm.get('name').value, "Usuario").subscribe(loginResponse => {
                        this.usersService.login(
                             this.signUpForm.get('cc').value,
                             this.signUpForm.get('password').value).subscribe(loginResponse => {
                                    sessionStorage.setItem("currentUser", this.signUpForm.get('cc').value);
                                    this.router.navigate(['objetos']);
                                }, error => {
                                })

                      }, error => {
                        this.error="Error";
                      })


                })


  }




    ngOnInit() {
        window.scroll(0,0)
        this.error="";
        this.loader="Registrate";


  }
}