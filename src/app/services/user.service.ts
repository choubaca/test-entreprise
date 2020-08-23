import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

@Injectable()

export class UserService {



  constructor(private http: HttpClient){

  }



  getUser(){
    return this.http.get<User[]>(`https://api.jwt.awayup.io/user/myself`);
  }

}
