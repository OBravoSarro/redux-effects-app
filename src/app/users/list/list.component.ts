import { Component, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnDestroy {

  public users: User[] = [];
  private userSubscription: Subscription = new Subscription();

  constructor(private _user: UserService) {
    this.userSubscription = this._user.getUserList().subscribe((users: User[]) => this.users = users);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
