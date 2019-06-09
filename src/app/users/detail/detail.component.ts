import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { RootState } from 'src/app/store/root.state';
import { SetUserDetail } from 'src/app/store/user-detail/user-detail.actions';
import { UserDetailState } from 'src/app/store/user-detail/user-detail.state';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  public user: User;
  public loading: boolean;
  public error: any;

  constructor(private store: Store<RootState>, private router: ActivatedRoute) {
    console.log(this.router.snapshot.params.id);
    this.router.params.subscribe(
      params => this.store.dispatch(new SetUserDetail(params.id))
    );
    this.store.select('userDetail').subscribe((user: UserDetailState) => {
      this.user = user.user;
      this.loading = user.loading;
      this.error = user.error;
    });
  }

}
