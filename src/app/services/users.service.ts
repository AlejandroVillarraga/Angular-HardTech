import { Injectable } from '@angular/core';

//Importaciones nuevas
import { Http } from '@angular/http';
import { APIService } from '.././common/api.service';
import { AppConfiguration } from '.././common/config/app-configuration.service';
import { AuthService } from '.././common/auth.service';
import { User } from '.././models/user';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class UsersService extends APIService {
constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  login(cc: string, password: string) {
    return this.post('user/login', { cc, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  signUp(cc: string, password: string, name: string, permission: string){
    return this.post("user/signup", new User(name, password, cc, permission));
  }


  getUser(cc: string): Observable<User> {
    return this.get("user/byCC/"+cc);
  }

  getUserPermission(cc: string): Observable<string> {
    return this.get("user/getPermission/"+cc);
  }


}