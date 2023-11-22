import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

export const studentGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AcademiaserviceService);

  return true;
  // return authService
  //   .verifyToken()
  //   .pipe(
  //     map((isAuthenticated) =>
  //       isAuthenticated ? true : router.createUrlTree(['/'])
  //     )
  //   );
};
