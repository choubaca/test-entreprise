import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor  {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser}`
            }
        });
    }
    
    return next.handle(request);
    
}



}
