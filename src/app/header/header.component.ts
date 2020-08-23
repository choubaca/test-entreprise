import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  currentUser: User;

  constructor(private router: Router,
        private AuthService: AuthService) {

          this.AuthService.currentUser.subscribe(x => this.currentUser = x);
        }

        logout() {
          this.AuthService.logout();
          this.router.navigate(['/login']);
      }
}
