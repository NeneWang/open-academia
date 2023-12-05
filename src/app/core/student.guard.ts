import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AcademiaserviceService);
  // as long as the user is logged in, we can assume that the user is a student
  return authService.authUser$.pipe(
    map((user) => {
      if (!user) {
        return router.createUrlTree(['/']);
      } else {
        return true;
      }
    })
  );
};
