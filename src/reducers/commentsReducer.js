import * as types from '../actions/types';

export const initialState = {
    loading: false,
    error: null,
    data: []
}

export default(prevState = initialState, action) => {
    switch (action.type) {
    case types.FETCH_COMMENTS_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: []
      });
    case types.FETCH_COMMENTS_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
      });
    case types.FETCH_COMMENTS_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
      case types.POST_COMMENT_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: prevState.data
      });
    case types.POST_COMMENT_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
      });
    case types.POST_COMMENT_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
      case types.PATCH_COMMENT_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: prevState.data
      });
    case types.PATCH_COMMENT_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
      });
    case types.PATCH_COMMENT_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
      case types.DELETE_COMMENT_REQUEST:
      return Object.assign({}, prevState, {
        loading: true,
        error: null,
        data: prevState.data
      });
    case types.DELETE_COMMENT_SUCCESS:
      return Object.assign({}, prevState, {
        loading: false,
        error: null,
        data: action.payload
      });
    case types.DELETE_COMMENT_FAILURE:
      return Object.assign({}, prevState, {
        loading: false,
        error: action.payload,
        data: []
      });
    default:
      return prevState;
    }
  };