import { ActionTypes } from "state/action-types"
import service from 'services';

export const fetchAllPosts = () => {
  return async(dispatch:any) => {
    dispatch({
      type: ActionTypes.FETCH_ALL_POSTS
    })

    try {
      const response = await service.get('POSTS');

      dispatch({
        type: ActionTypes.FETCH_ALL_POSTS_SUCCESS,
        payload: response.data
      })
    }
    catch(e) {
      dispatch({
        type: ActionTypes.FETCH_ALL_POSTS_ERROR,
        payload: 'Erro ao buscar os posts!'
      })
    }
  }
}

