import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import * as userDetailActions from './user-detail.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { of } from 'rxjs';

@Injectable()
export class UserDetailEffects {

    @Effect()
    setUserDetail$ = this.actions$.pipe(
        ofType(userDetailActions.UserDetailActionTypes.SetUserDetail),
        switchMap((action: userDetailActions.SetUserDetail) => this._user.getUserDetail(action.payload).pipe(
            map((userData: User) =>
                new userDetailActions.SetUserDetailSuccess(userData)
            ),
            catchError(err => of(new userDetailActions.SetUserDetailFail(err)))
        ))
    );

    constructor(private actions$: Actions, private _user: UserService) { }

}
