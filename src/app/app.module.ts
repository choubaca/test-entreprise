import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { JwtInterceptorService} from './services/jwt.interceptor.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'users', canActivate: [AuthGuardService] , component: UserComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo:'/not-found'}
]



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    HeaderComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    UserService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
