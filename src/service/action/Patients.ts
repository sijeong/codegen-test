/// <reference path="../types.ts"/>
/** @module action/Patients */
// Auto-generated, edits will be overwritten
import * as Patients from '../Patients'

export const POST_API_V1_PATIENTS_START = 's/Patients/POST_API_V1_PATIENTS_START'
export const POST_API_V1_PATIENTS = 's/Patients/POST_API_V1_PATIENTS'
export type POST_API_V1_PATIENTS = string

export function postApiV1Patients(options?: Patients.PostApiV1PatientsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_PATIENTS_START, meta: { info } })
    return Patients.postApiV1Patients(options)
      .then(response => dispatch({
        type: POST_API_V1_PATIENTS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_PATIENTS_START = 's/Patients/GET_API_V1_PATIENTS_START'
export const GET_API_V1_PATIENTS = 's/Patients/GET_API_V1_PATIENTS'
export type GET_API_V1_PATIENTS = api.PatientsViewModel

export function getApiV1Patients(options?: Patients.GetApiV1PatientsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_PATIENTS_START, meta: { info } })
    return Patients.getApiV1Patients(options)
      .then(response => dispatch({
        type: GET_API_V1_PATIENTS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_PATIENTS_PATIENT_ID_START = 's/Patients/GET_API_V1_PATIENTS_PATIENT_ID_START'
export const GET_API_V1_PATIENTS_PATIENT_ID = 's/Patients/GET_API_V1_PATIENTS_PATIENT_ID'
export type GET_API_V1_PATIENTS_PATIENT_ID = api.PatientViewModel

export function getApiV1PatientsPatientId(patientId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_PATIENTS_PATIENT_ID_START, meta: { info } })
    return Patients.getApiV1PatientsPatientId(patientId)
      .then(response => dispatch({
        type: GET_API_V1_PATIENTS_PATIENT_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_PATIENTS_PATIENT_ID_START = 's/Patients/PUT_API_V1_PATIENTS_PATIENT_ID_START'
export const PUT_API_V1_PATIENTS_PATIENT_ID = 's/Patients/PUT_API_V1_PATIENTS_PATIENT_ID'
export type PUT_API_V1_PATIENTS_PATIENT_ID = boolean

export function putApiV1PatientsPatientId(patientId: string, options?: Patients.PutApiV1PatientsPatientIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_PATIENTS_PATIENT_ID_START, meta: { info } })
    return Patients.putApiV1PatientsPatientId(patientId, options)
      .then(response => dispatch({
        type: PUT_API_V1_PATIENTS_PATIENT_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_PATIENTS_PATIENT_ID_START = 's/Patients/DELETE_API_V1_PATIENTS_PATIENT_ID_START'
export const DELETE_API_V1_PATIENTS_PATIENT_ID = 's/Patients/DELETE_API_V1_PATIENTS_PATIENT_ID'
export type DELETE_API_V1_PATIENTS_PATIENT_ID = boolean

export function deleteApiV1PatientsPatientId(patientId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_PATIENTS_PATIENT_ID_START, meta: { info } })
    return Patients.deleteApiV1PatientsPatientId(patientId)
      .then(response => dispatch({
        type: DELETE_API_V1_PATIENTS_PATIENT_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
