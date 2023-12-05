import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/counter.actions';

import { Observable, filter, map, mergeMap, of } from 'rxjs';
import { User } from 'src/app/academia/models';
import { AcademiaserviceService } from 'src/app/academia/services/academiaservice.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-academia';
  count: number | undefined;
  authUser$: Observable<User | null>;
  showSidebar = false;



  constructor(private store: Store<{ counter: { count: number } }>,
    
    private router: Router,
    private academiaserviceService: AcademiaserviceService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,) {
    this.store.select('counter').subscribe((state) => {
      this.count = state.count;
    });

    this.authUser$ = this.academiaserviceService.authUser$;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    )
      .subscribe((event) => this.titleService.setTitle(event['title']));
  }
  get email$(): Observable<string | undefined> {
    return this.authUser$.pipe(map((user) => user?.email));
  }
  get name$(): Observable<string | undefined> {

    return this.authUser$.pipe(map((user) => ` ${user?.first} ${user?.last}`));
  }

  get isLogin$(): Observable<boolean> {
    return this.authUser$.pipe(map((user) => !!user));
  }

  get isAdmin$(): Observable<boolean> {
    return this.authUser$.pipe(map((user) => user?.role === 'ADMIN'));
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

  toggleDrawer() {
    console.log("toggleDrawer");
    // this.sidenav.toggle();
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar)
  }


  loginAsStudent() {
    console.log('loginDemo');
    this.academiaserviceService.login({
      email: 'nelsonwang@mail.com',
      password: 'password1'
    });
  }

  logout() {
    this.academiaserviceService.logout();
  }
}
