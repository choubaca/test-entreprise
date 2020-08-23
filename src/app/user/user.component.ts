import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../models/User.model';
import { UserService} from '../services/user.service';
import { AuthService} from '../services/auth.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  currentUser: User;
  users = [];

  constructor(private authService: AuthService,
              private userService: UserService) { 

  this.currentUser = this.authService.currentUserValue;

              }

  ngOnInit(){

    this.loadAllUsers();

  }

  private loadAllUsers() {
    this.userService.getUser()
        .pipe(first())
        .subscribe(users => this.users = users);
}


} 
