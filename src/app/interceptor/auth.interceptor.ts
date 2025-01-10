import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LocalStorageService } from '../service/local.storage.service';

const tokenProperty = "token";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorage = inject(LocalStorageService);
  const token = localStorage.getVar(tokenProperty);

  if(token){
    const clonedRequest = req.clone({
      headers : req.headers.set("authorization", `Bearer ${token}`)
    });

    return next(clonedRequest);
  }
  
  console.log("SENDING REQUESTS");
  return next(req);
};
