
import { initialState, UserListState } from './user-list.state';
import { userListActions, UserListActionTypes } from './user-list.actions';

export function userListReducer(state = initialState, action: userListActions): UserListState {
    switch (action.type) {
        case UserListActionTypes.SetUserList:
            return { ...state, loading: true, error: null };
        case UserListActionTypes.SetUserListSuccess:
            return { ...state, loading: false, loaded: true, users: [...action.users], error: null };
        case UserListActionTypes.SetUserListFail:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}
