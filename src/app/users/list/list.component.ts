import { Component } from '@angular/core';
import { RootState } from 'src/app/store/root.state';
import { Store } from '@ngrx/store';
import { SetUserList } from '../../store/user-list/user-list.actions';
import { UserListState } from '../../store/user-list/user-list.state';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  public userList: User[];
  public loading: boolean;
  public error: any;

  constructor(private store: Store<RootState>, private router: Router) {
    this.store.dispatch(new SetUserList());
    this.store.select('userList').subscribe((userList: UserListState) => {
      this.userList = userList.users;
      this.loading = userList.loading;
      this.error = userList.error;
    });
  }

  public goToDetail(userId: number) {
    console.log('EMNTRA');
    this.router.navigate(['user', userId]);
  }

}
