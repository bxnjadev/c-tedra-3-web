import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { LocalStorageService } from '../service/local.storage.service';

export const NoAuthGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  if(!localStorageService.getVar('token')){
    return true;
  }

  router.navigate(['']);
  return false;
};

