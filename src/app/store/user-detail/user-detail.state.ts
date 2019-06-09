import { User } from '../../models/user.model';

export interface UserDetailState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: UserDetailState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};
