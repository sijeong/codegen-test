/// <reference path="../types.ts"/>
/** @module action/Images */
// Auto-generated, edits will be overwritten
import * as Images from '../Images'

export const POST_API_V1_IMAGES_START = 's/Images/POST_API_V1_IMAGES_START'
export const POST_API_V1_IMAGES = 's/Images/POST_API_V1_IMAGES'
export type POST_API_V1_IMAGES = any

export function postApiV1Images(info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_IMAGES_START, meta: { info } })
    return Images.postApiV1Images()
      .then(response => dispatch({
        type: POST_API_V1_IMAGES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
