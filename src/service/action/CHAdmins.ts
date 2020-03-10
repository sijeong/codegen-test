/// <reference path="../types.ts"/>
/** @module action/CHAdmins */
// Auto-generated, edits will be overwritten
import * as CHAdmins from '../CHAdmins'

export const POST_API_V1_CHADMINS_START = 's/CHAdmins/POST_API_V1_CHADMINS_START'
export const POST_API_V1_CHADMINS = 's/CHAdmins/POST_API_V1_CHADMINS'
export type POST_API_V1_CHADMINS = string

export function postApiV1Chadmins(options?: CHAdmins.PostApiV1ChadminsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_CHADMINS_START, meta: { info } })
    return CHAdmins.postApiV1Chadmins(options)
      .then(response => dispatch({
        type: POST_API_V1_CHADMINS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_CHADMINS_START = 's/CHAdmins/GET_API_V1_CHADMINS_START'
export const GET_API_V1_CHADMINS = 's/CHAdmins/GET_API_V1_CHADMINS'
export type GET_API_V1_CHADMINS = api.CHAdminsViewModel

export function getApiV1Chadmins(options?: CHAdmins.GetApiV1ChadminsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_CHADMINS_START, meta: { info } })
    return CHAdmins.getApiV1Chadmins(options)
      .then(response => dispatch({
        type: GET_API_V1_CHADMINS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_CHADMINS_CH_ADMIN_ID_START = 's/CHAdmins/GET_API_V1_CHADMINS_CH_ADMIN_ID_START'
export const GET_API_V1_CHADMINS_CH_ADMIN_ID = 's/CHAdmins/GET_API_V1_CHADMINS_CH_ADMIN_ID'
export type GET_API_V1_CHADMINS_CH_ADMIN_ID = api.CHAdminViewModel

export function getApiV1ChadminsChAdminId(chAdminId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_CHADMINS_CH_ADMIN_ID_START, meta: { info } })
    return CHAdmins.getApiV1ChadminsChAdminId(chAdminId)
      .then(response => dispatch({
        type: GET_API_V1_CHADMINS_CH_ADMIN_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_CHADMINS_CH_ADMIN_ID_START = 's/CHAdmins/PUT_API_V1_CHADMINS_CH_ADMIN_ID_START'
export const PUT_API_V1_CHADMINS_CH_ADMIN_ID = 's/CHAdmins/PUT_API_V1_CHADMINS_CH_ADMIN_ID'
export type PUT_API_V1_CHADMINS_CH_ADMIN_ID = boolean

export function putApiV1ChadminsChAdminId(chAdminId: string, options?: CHAdmins.PutApiV1ChadminsChAdminIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_CHADMINS_CH_ADMIN_ID_START, meta: { info } })
    return CHAdmins.putApiV1ChadminsChAdminId(chAdminId, options)
      .then(response => dispatch({
        type: PUT_API_V1_CHADMINS_CH_ADMIN_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_CHADMINS_CH_ADMIN_ID_START = 's/CHAdmins/DELETE_API_V1_CHADMINS_CH_ADMIN_ID_START'
export const DELETE_API_V1_CHADMINS_CH_ADMIN_ID = 's/CHAdmins/DELETE_API_V1_CHADMINS_CH_ADMIN_ID'
export type DELETE_API_V1_CHADMINS_CH_ADMIN_ID = boolean

export function deleteApiV1ChadminsChAdminId(chAdminId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_CHADMINS_CH_ADMIN_ID_START, meta: { info } })
    return CHAdmins.deleteApiV1ChadminsChAdminId(chAdminId)
      .then(response => dispatch({
        type: DELETE_API_V1_CHADMINS_CH_ADMIN_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
