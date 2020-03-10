/// <reference path="../types.ts"/>
/** @module action/Movies */
// Auto-generated, edits will be overwritten
import * as Movies from '../Movies'

export const POST_API_V1_MOVIES_START = 's/Movies/POST_API_V1_MOVIES_START'
export const POST_API_V1_MOVIES = 's/Movies/POST_API_V1_MOVIES'
export type POST_API_V1_MOVIES = any

export function postApiV1Movies(info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_MOVIES_START, meta: { info } })
    return Movies.postApiV1Movies()
      .then(response => dispatch({
        type: POST_API_V1_MOVIES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
