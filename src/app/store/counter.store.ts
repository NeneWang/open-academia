import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { counterReducer } from './counter.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ counter: counterReducer })],
})
export class CounterStoreModule {}
