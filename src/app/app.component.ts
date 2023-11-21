import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'open-academia';
  count: number | undefined;

  constructor(private store: Store<{ counter: { count: number } }>) {
    this.store.select('counter').subscribe((state) => {
      this.count = state.count;
    });
  }

  
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
