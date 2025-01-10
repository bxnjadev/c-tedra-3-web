import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { LocalStorageService } from '../service/local.storage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  if(localStorageService.getVar('token')){
    console.log("ACSESS");
    return true;
  }

  console.log("NO ACESS");
  router.navigate(['auth']);
  return false;
};

