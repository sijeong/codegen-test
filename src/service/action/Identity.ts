/// <reference path="../types.ts"/>
/** @module action/Identity */
// Auto-generated, edits will be overwritten
import * as Identity from '../Identity'

export const GET_API_V1_IDENTITY_START = 's/Identity/GET_API_V1_IDENTITY_START'
export const GET_API_V1_IDENTITY = 's/Identity/GET_API_V1_IDENTITY'
export type GET_API_V1_IDENTITY = any

export function getApiV1Identity(info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_IDENTITY_START, meta: { info } })
    return Identity.getApiV1Identity()
      .then(response => dispatch({
        type: GET_API_V1_IDENTITY,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
