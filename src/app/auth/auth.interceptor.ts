import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler, ): Observable<HttpEvent<any>> {
        const header = new HttpHeaders()
            .set('Content-Type', 'application/json');

        const authReq = req.clone({ headers: header });

        return next.handle(authReq);
    }
}
