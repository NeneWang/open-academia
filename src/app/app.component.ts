import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/counter.actions';

import { Observable, map, of } from 'rxjs';
import { User } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-academia';
  count: number | undefined;
  authUser$: Observable<User | null>;
  


  constructor(private store: Store<{ counter: { count: number } }>, private academiaserviceService: AcademiaserviceService) {
    this.store.select('counter').subscribe((state) => {
      this.count = state.count;
    });
    
    this.authUser$ = this.academiaserviceService.authUser$;
  
  }
  get email$(): Observable<string | undefined> {
    return this.authUser$.pipe(map((user) => user?.email));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  loginAsAdmin() {
    console.log('loginDemo');
    this.academiaserviceService.login({
      email: 'buckyroberts@mail.com',
      password: 'password1'
    });
  }

  
  loginAsStudent() {
    console.log('loginDemo');
    this.academiaserviceService.login({
      email: 'nelsonwang@mail.com',
      password: 'password1'
    });

  
  }
}
