import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormGroup, FormBuilder,FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HomePageComponent } from './pages/home-page/home-page.component';

import { ObjetosPageComponent } from './pages/objetos-page/objetos-page.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


//Nuevos imports
import { AppConfiguration } from './common/config/app-configuration.service';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HttpModule } from '@angular/http';
import { APIService } from './common/api.service';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';
import { SignInPageComponent } from './pages/sign-in/sign-in-page.component';

import { ReservasPageComponent } from './pages/reservas-page/reservas-page.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up-page.component';

import { UsersService } from './services/users.service';
import { ObjetoService } from './services/objeto.service';




const ROUTES = [
{ path: 'signin', component: SignInPageComponent },
{ path: 'home', component: HomePageComponent },
{ path: 'objetos', component: ObjetosPageComponent },
{ path: 'reservas', component: ReservasPageComponent },
{ path: 'perfil', component: PerfilPageComponent },
{ path: 'signup', component: SignUpPageComponent },
{path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    SignInPageComponent,
    ObjetosPageComponent,
    SignUpPageComponent,
    ReservasPageComponent,
    PerfilPageComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    AppConfiguration,
    APIService,
    AuthService,
    AppDataService,
    UsersService,
    ObjetoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
