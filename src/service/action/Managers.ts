/// <reference path="../types.ts"/>
/** @module action/Managers */
// Auto-generated, edits will be overwritten
import * as Managers from '../Managers'

export const POST_API_V1_MANAGERS_START = 's/Managers/POST_API_V1_MANAGERS_START'
export const POST_API_V1_MANAGERS = 's/Managers/POST_API_V1_MANAGERS'
export type POST_API_V1_MANAGERS = string

export function postApiV1Managers(options?: Managers.PostApiV1ManagersOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_MANAGERS_START, meta: { info } })
    return Managers.postApiV1Managers(options)
      .then(response => dispatch({
        type: POST_API_V1_MANAGERS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_MANAGERS_START = 's/Managers/GET_API_V1_MANAGERS_START'
export const GET_API_V1_MANAGERS = 's/Managers/GET_API_V1_MANAGERS'
export type GET_API_V1_MANAGERS = api.ManagersViewModel

export function getApiV1Managers(options?: Managers.GetApiV1ManagersOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_MANAGERS_START, meta: { info } })
    return Managers.getApiV1Managers(options)
      .then(response => dispatch({
        type: GET_API_V1_MANAGERS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_MANAGERS_MANAGER_ID_START = 's/Managers/GET_API_V1_MANAGERS_MANAGER_ID_START'
export const GET_API_V1_MANAGERS_MANAGER_ID = 's/Managers/GET_API_V1_MANAGERS_MANAGER_ID'
export type GET_API_V1_MANAGERS_MANAGER_ID = api.ManagerViewModel

export function getApiV1ManagersManagerId(managerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_MANAGERS_MANAGER_ID_START, meta: { info } })
    return Managers.getApiV1ManagersManagerId(managerId)
      .then(response => dispatch({
        type: GET_API_V1_MANAGERS_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_MANAGERS_MANAGER_ID_START = 's/Managers/PUT_API_V1_MANAGERS_MANAGER_ID_START'
export const PUT_API_V1_MANAGERS_MANAGER_ID = 's/Managers/PUT_API_V1_MANAGERS_MANAGER_ID'
export type PUT_API_V1_MANAGERS_MANAGER_ID = boolean

export function putApiV1ManagersManagerId(managerId: string, options?: Managers.PutApiV1ManagersManagerIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_MANAGERS_MANAGER_ID_START, meta: { info } })
    return Managers.putApiV1ManagersManagerId(managerId, options)
      .then(response => dispatch({
        type: PUT_API_V1_MANAGERS_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_MANAGERS_MANAGER_ID_START = 's/Managers/DELETE_API_V1_MANAGERS_MANAGER_ID_START'
export const DELETE_API_V1_MANAGERS_MANAGER_ID = 's/Managers/DELETE_API_V1_MANAGERS_MANAGER_ID'
export type DELETE_API_V1_MANAGERS_MANAGER_ID = boolean

export function deleteApiV1ManagersManagerId(managerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_MANAGERS_MANAGER_ID_START, meta: { info } })
    return Managers.deleteApiV1ManagersManagerId(managerId)
      .then(response => dispatch({
        type: DELETE_API_V1_MANAGERS_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
