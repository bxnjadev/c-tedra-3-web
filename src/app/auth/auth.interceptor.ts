import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../service/local.storage.service';

const localStorage = inject(LocalStorageService);
const tokenProperty = "token";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getVar(tokenProperty);

  if(token){
    const clonedRequest = req.clone({
      headers : req.headers.set("authorization", `Bearer ${token}`)
    });

    return next(clonedRequest);
  }
  

  return next(req);
};
