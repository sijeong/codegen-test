/// <reference path="../types.ts"/>
/** @module action/CHManagers */
// Auto-generated, edits will be overwritten
import * as CHManagers from '../CHManagers'

export const POST_API_V1_CHMANAGERS_START = 's/CHManagers/POST_API_V1_CHMANAGERS_START'
export const POST_API_V1_CHMANAGERS = 's/CHManagers/POST_API_V1_CHMANAGERS'
export type POST_API_V1_CHMANAGERS = string

export function postApiV1Chmanagers(options?: CHManagers.PostApiV1ChmanagersOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_CHMANAGERS_START, meta: { info } })
    return CHManagers.postApiV1Chmanagers(options)
      .then(response => dispatch({
        type: POST_API_V1_CHMANAGERS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_CHMANAGERS_START = 's/CHManagers/GET_API_V1_CHMANAGERS_START'
export const GET_API_V1_CHMANAGERS = 's/CHManagers/GET_API_V1_CHMANAGERS'
export type GET_API_V1_CHMANAGERS = api.CHManagersViewModel

export function getApiV1Chmanagers(options?: CHManagers.GetApiV1ChmanagersOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_CHMANAGERS_START, meta: { info } })
    return CHManagers.getApiV1Chmanagers(options)
      .then(response => dispatch({
        type: GET_API_V1_CHMANAGERS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_CHMANAGERS_CH_MANAGER_ID_START = 's/CHManagers/GET_API_V1_CHMANAGERS_CH_MANAGER_ID_START'
export const GET_API_V1_CHMANAGERS_CH_MANAGER_ID = 's/CHManagers/GET_API_V1_CHMANAGERS_CH_MANAGER_ID'
export type GET_API_V1_CHMANAGERS_CH_MANAGER_ID = api.CHManagerViewModel

export function getApiV1ChmanagersChManagerId(managerId: string, chManagerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_CHMANAGERS_CH_MANAGER_ID_START, meta: { info } })
    return CHManagers.getApiV1ChmanagersChManagerId(managerId, chManagerId)
      .then(response => dispatch({
        type: GET_API_V1_CHMANAGERS_CH_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_CHMANAGERS_CH_MANAGER_ID_START = 's/CHManagers/PUT_API_V1_CHMANAGERS_CH_MANAGER_ID_START'
export const PUT_API_V1_CHMANAGERS_CH_MANAGER_ID = 's/CHManagers/PUT_API_V1_CHMANAGERS_CH_MANAGER_ID'
export type PUT_API_V1_CHMANAGERS_CH_MANAGER_ID = boolean

export function putApiV1ChmanagersChManagerId(chManagerId: string, options?: CHManagers.PutApiV1ChmanagersChManagerIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_CHMANAGERS_CH_MANAGER_ID_START, meta: { info } })
    return CHManagers.putApiV1ChmanagersChManagerId(chManagerId, options)
      .then(response => dispatch({
        type: PUT_API_V1_CHMANAGERS_CH_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID_START = 's/CHManagers/DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID_START'
export const DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID = 's/CHManagers/DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID'
export type DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID = boolean

export function deleteApiV1ChmanagersChManagerId(chManagerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID_START, meta: { info } })
    return CHManagers.deleteApiV1ChmanagersChManagerId(chManagerId)
      .then(response => dispatch({
        type: DELETE_API_V1_CHMANAGERS_CH_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
