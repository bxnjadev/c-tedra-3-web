import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { LocalStorageService } from '../service/local.storage.service';

const router = inject(Router);
const localStorageService = inject(LocalStorageService);

export const authGuard: CanActivateFn = (route, state) => {
  
  if(localStorageService.getVar('token')){
    return true;
  }
  router.navigate(['auth']);
  return false;
};

export const routes : Routes {
  
}
