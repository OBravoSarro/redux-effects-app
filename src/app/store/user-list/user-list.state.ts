import { User } from '../../models/user.model';

export interface UserListState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: UserListState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};
