import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RootState } from './root.state';
import { userListReducer } from './user-list/user-list.reducer';
import { userDetailReducer } from './user-detail/user-detail.reducer';
import { environment } from '../../environments/environment';
import { UserListEffects } from './user-list/user-list.effects';
import { UserDetailEffects } from './user-detail/user-detail.effects';

export const rootReducers: ActionReducerMap<RootState> = {
    userList: userListReducer,
    userDetail: userDetailReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [] : [];

export const rootEffects: any[] = [ UserListEffects, UserDetailEffects ];
