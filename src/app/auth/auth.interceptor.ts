import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest } from '@angualar/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest)
}
