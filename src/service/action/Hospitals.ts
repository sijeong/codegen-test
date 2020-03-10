/// <reference path="../types.ts"/>
/** @module action/Hospitals */
// Auto-generated, edits will be overwritten
import * as Hospitals from '../Hospitals'

export const POST_API_V1_HOSPITALS_START = 's/Hospitals/POST_API_V1_HOSPITALS_START'
export const POST_API_V1_HOSPITALS = 's/Hospitals/POST_API_V1_HOSPITALS'
export type POST_API_V1_HOSPITALS = string

export function postApiV1Hospitals(options?: Hospitals.PostApiV1HospitalsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_START, meta: { info } })
    return Hospitals.postApiV1Hospitals(options)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_START = 's/Hospitals/GET_API_V1_HOSPITALS_START'
export const GET_API_V1_HOSPITALS = 's/Hospitals/GET_API_V1_HOSPITALS'
export type GET_API_V1_HOSPITALS = api.HospitalsViewModel

export function getApiV1Hospitals(options?: Hospitals.GetApiV1HospitalsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_START, meta: { info } })
    return Hospitals.getApiV1Hospitals(options)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_HOSPITAL_ID_START = 's/Hospitals/GET_API_V1_HOSPITALS_HOSPITAL_ID_START'
export const GET_API_V1_HOSPITALS_HOSPITAL_ID = 's/Hospitals/GET_API_V1_HOSPITALS_HOSPITAL_ID'
export type GET_API_V1_HOSPITALS_HOSPITAL_ID = api.HospitalViewModel

export function getApiV1HospitalsHospitalId(hospitalId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_HOSPITAL_ID_START, meta: { info } })
    return Hospitals.getApiV1HospitalsHospitalId(hospitalId)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_HOSPITAL_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_START = 's/Hospitals/PUT_API_V1_HOSPITALS_HOSPITAL_ID_START'
export const PUT_API_V1_HOSPITALS_HOSPITAL_ID = 's/Hospitals/PUT_API_V1_HOSPITALS_HOSPITAL_ID'
export type PUT_API_V1_HOSPITALS_HOSPITAL_ID = boolean

export function putApiV1HospitalsHospitalId(hospitalId: string, options?: Hospitals.PutApiV1HospitalsHospitalIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_START, meta: { info } })
    return Hospitals.putApiV1HospitalsHospitalId(hospitalId, options)
      .then(response => dispatch({
        type: PUT_API_V1_HOSPITALS_HOSPITAL_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_START = 's/Hospitals/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID = 's/Hospitals/DELETE_API_V1_HOSPITALS_HOSPITAL_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID = boolean

export function deleteApiV1HospitalsHospitalId(hospitalId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_START, meta: { info } })
    return Hospitals.deleteApiV1HospitalsHospitalId(hospitalId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
