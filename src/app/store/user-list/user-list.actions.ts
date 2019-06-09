import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum UserListActionTypes {
    SetUserList = '[Users] Set user list',
    SetUserListFail = '[Users] Set user list fail',
    SetUserListSuccess = '[Users] Set user list success'
}


export class SetUserList implements Action {
    readonly type = UserListActionTypes.SetUserList;
}

export class SetUserListFail implements Action {
    readonly type = UserListActionTypes.SetUserListFail;
    constructor(public payload: any) {}
}

export class SetUserListSuccess implements Action {
    readonly type = UserListActionTypes.SetUserListSuccess;
    constructor(public users: User[]) {}
}

export type userListActions = SetUserList | SetUserListFail | SetUserListSuccess;
