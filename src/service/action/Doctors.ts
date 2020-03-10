/// <reference path="../types.ts"/>
/** @module action/Doctors */
// Auto-generated, edits will be overwritten
import * as Doctors from '../Doctors'

export const POST_API_V1_DOCTORS_START = 's/Doctors/POST_API_V1_DOCTORS_START'
export const POST_API_V1_DOCTORS = 's/Doctors/POST_API_V1_DOCTORS'
export type POST_API_V1_DOCTORS = string

export function postApiV1Doctors(options?: Doctors.PostApiV1DoctorsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_DOCTORS_START, meta: { info } })
    return Doctors.postApiV1Doctors(options)
      .then(response => dispatch({
        type: POST_API_V1_DOCTORS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_DOCTORS_START = 's/Doctors/GET_API_V1_DOCTORS_START'
export const GET_API_V1_DOCTORS = 's/Doctors/GET_API_V1_DOCTORS'
export type GET_API_V1_DOCTORS = api.DoctorsViewModel

export function getApiV1Doctors(options?: Doctors.GetApiV1DoctorsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_DOCTORS_START, meta: { info } })
    return Doctors.getApiV1Doctors(options)
      .then(response => dispatch({
        type: GET_API_V1_DOCTORS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_DOCTORS_DOCTOR_ID_START = 's/Doctors/GET_API_V1_DOCTORS_DOCTOR_ID_START'
export const GET_API_V1_DOCTORS_DOCTOR_ID = 's/Doctors/GET_API_V1_DOCTORS_DOCTOR_ID'
export type GET_API_V1_DOCTORS_DOCTOR_ID = api.DoctorViewModel

export function getApiV1DoctorsDoctorId(doctorId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_DOCTORS_DOCTOR_ID_START, meta: { info } })
    return Doctors.getApiV1DoctorsDoctorId(doctorId)
      .then(response => dispatch({
        type: GET_API_V1_DOCTORS_DOCTOR_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_DOCTORS_DOCTOR_ID_START = 's/Doctors/PUT_API_V1_DOCTORS_DOCTOR_ID_START'
export const PUT_API_V1_DOCTORS_DOCTOR_ID = 's/Doctors/PUT_API_V1_DOCTORS_DOCTOR_ID'
export type PUT_API_V1_DOCTORS_DOCTOR_ID = boolean

export function putApiV1DoctorsDoctorId(doctorId: string, options?: Doctors.PutApiV1DoctorsDoctorIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_DOCTORS_DOCTOR_ID_START, meta: { info } })
    return Doctors.putApiV1DoctorsDoctorId(doctorId, options)
      .then(response => dispatch({
        type: PUT_API_V1_DOCTORS_DOCTOR_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_DOCTORS_DOCTOR_ID_START = 's/Doctors/DELETE_API_V1_DOCTORS_DOCTOR_ID_START'
export const DELETE_API_V1_DOCTORS_DOCTOR_ID = 's/Doctors/DELETE_API_V1_DOCTORS_DOCTOR_ID'
export type DELETE_API_V1_DOCTORS_DOCTOR_ID = boolean

export function deleteApiV1DoctorsDoctorId(doctorId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_DOCTORS_DOCTOR_ID_START, meta: { info } })
    return Doctors.deleteApiV1DoctorsDoctorId(doctorId)
      .then(response => dispatch({
        type: DELETE_API_V1_DOCTORS_DOCTOR_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
