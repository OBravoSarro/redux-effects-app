import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserDetailActionTypes {
    SetUserDetail = '[User] Set user detail',
    SetUserDetailFail = '[User] Set user detail fail',
    SetUserDetailSuccess = '[User] Set user detail success'
}


export class SetUserDetail implements Action {
    readonly type = UserDetailActionTypes.SetUserDetail;
    constructor(public payload: number) {}
}

export class SetUserDetailFail implements Action {
    readonly type = UserDetailActionTypes.SetUserDetailFail;
    constructor(public payload: any) {}
}

export class SetUserDetailSuccess implements Action {
    readonly type = UserDetailActionTypes.SetUserDetailSuccess;
    constructor(public user: User) {}
}

export type userDetailActions = SetUserDetail | SetUserDetailFail | SetUserDetailSuccess;
