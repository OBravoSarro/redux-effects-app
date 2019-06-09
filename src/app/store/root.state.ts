import { UserListState } from './user-list/user-list.state';
import { UserDetailState } from './user-detail/user-detail.state';

export interface RootState {
    userList: UserListState;
    userDetail: UserDetailState;
}
