import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as userListActions from './user-list.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { of } from 'rxjs';

@Injectable()
export class UserListEffects {

    @Effect()
    setUserList$ = this.actions$.pipe(
        ofType(userListActions.UserListActionTypes.SetUserList),
        switchMap(() => this._user.getUserList().pipe(
            map((userData: User[]) =>
                new userListActions.SetUserListSuccess(userData)
            ),
            catchError(err => of(new userListActions.SetUserListFail(err)))
        ))
    );

    constructor(private actions$: Actions, private _user: UserService) { }

}
