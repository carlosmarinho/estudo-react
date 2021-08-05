import { ActionTypes } from 'state/action-types';

const initialState = {
  posts: [],
  loading: false,
  success: null,
  error: null
}

const postReducers = (state = initialState, action:any) => {
  switch(action.type) {
    case ActionTypes.FETCH_ALL_POSTS :
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        success: true,
        loading: false,
      }
    case ActionTypes.FETCH_ALL_POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}

export default postReducers;