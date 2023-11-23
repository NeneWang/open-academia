import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/academia/models';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  @Input()
  dataSource: User[] = [];

  @Output()
  editUser = new EventEmitter();

  @Output()
  deleteUser = new EventEmitter();

  displayedColumns = ['id', 'first', 'last', 'email', 'role', 'actions'];
}

