
import { initialState, UserDetailState } from './user-detail.state';
import { userDetailActions, UserDetailActionTypes } from './user-detail.actions';

export function userDetailReducer(state = initialState, action: userDetailActions): UserDetailState {
    switch (action.type) {
        case UserDetailActionTypes.SetUserDetail:
            return { ...state, loading: true, error: null };
        case UserDetailActionTypes.SetUserDetailSuccess:
            return { ...state, loading: false, loaded: true, user: action.user, error: null };
        case UserDetailActionTypes.SetUserDetailFail:
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
