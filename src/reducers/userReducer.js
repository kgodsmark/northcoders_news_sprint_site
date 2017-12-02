import * as types from '../actions/types';

export const initialState = {
    loading: false,
    error: null,
    data: [],
    repos: []
}

export default (prevState = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_REQUEST:
            return Object.assign({}, prevState, {
                loading: true,
                error: null,
                data: []
            });
        case types.FETCH_USER_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                error: null,
                data: action.payload
            });
        case types.FETCH_USER_FAILURE:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.payload,
                data: []
            });
            case types.FETCH_USERREPOS_REQUEST:
            return Object.assign({}, prevState, {
                loading: true,
                error: null,
                data: prevState.data,
                repos: []
            });
        case types.FETCH_USERREPOS_SUCCESS:
            return Object.assign({}, prevState, {
                loading: false,
                error: null,
                data: prevState.data,
                repos: action.payload
            });
        case types.FETCH_USERREPOS_FAILURE:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.payload,
                data: prevState.data,
                repos: []
            });
        default:
            return prevState;
    }
};