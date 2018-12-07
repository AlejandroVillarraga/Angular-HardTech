import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import {Objeto} from '.././models/objeto';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ObjetoService extends APIService {

private resourceUrl: string = 'objeto/';

constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  getObjetos(): Observable<Objeto[]> {
    return this.get(this.resourceUrl+"getAll");
  }

  getObjeto(title: string): Observable<Objeto> {
    return this.get(this.resourceUrl+title);
  }

  makeAReservation(title: string): Observable<Objeto> {
    console.log("ENTRO AQUIIIIIIIIIIi");
    return this.post(this.resourceUrl+"makeAReservation", title);
  }



}