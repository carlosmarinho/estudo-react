import { ActionTypes } from 'state/action-types';



interface IPost {
  id: number;
  title: string;
}

const initialState = {
  posts: [],
  loading: false,
  success: null,
  error: null,
};

interface PostState {
  posts: IPost[];
  loading: boolean;
  success: boolean | null;
  error: string | null;
}

interface FetchAllPostsAction {
  type: ActionTypes.FETCH_ALL_POSTS;
}

interface FetchAllPostsSuccessAction {
  type: ActionTypes.FETCH_ALL_POSTS_SUCCESS;
  payload: IPost[];
}

interface FetchAllPostsErrorAction {
  type: ActionTypes.FETCH_ALL_POSTS_ERROR;
  payload: string;
}

type ActionPost =
  | FetchAllPostsAction
  | FetchAllPostsSuccessAction
  | FetchAllPostsErrorAction;

const postReducers = (state: PostState = initialState, action: ActionPost) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_POSTS:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        success: true,
        loading: false,
      };
    case ActionTypes.FETCH_ALL_POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export default postReducers;