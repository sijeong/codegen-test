/// <reference path="../types.ts"/>
/** @module action/Affiliations */
// Auto-generated, edits will be overwritten
import * as Affiliations from '../Affiliations'

export const POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID_START = 's/Affiliations/POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID_START'
export const POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID = 's/Affiliations/POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID'
export type POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID = api.DoctorAffiliationViewModel

export function postApiV1HospitalsHospitalIdDoctorsDoctorId(hospitalId: string, doctorId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID_START, meta: { info } })
    return Affiliations.postApiV1HospitalsHospitalIdDoctorsDoctorId(hospitalId, doctorId)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID_START = 's/Affiliations/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID = 's/Affiliations/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID = boolean

export function deleteApiV1HospitalsHospitalIdDoctorsDoctorId(hospitalId: string, doctorId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID_START, meta: { info } })
    return Affiliations.deleteApiV1HospitalsHospitalIdDoctorsDoctorId(hospitalId, doctorId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_DOCTORS_DOCTOR_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID_START = 's/Affiliations/POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID_START'
export const POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID = 's/Affiliations/POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID'
export type POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID = api.ManagerAffiliationViewModel

export function postApiV1HospitalsHospitalIdManagersManagerId(hospitalId: string, managerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID_START, meta: { info } })
    return Affiliations.postApiV1HospitalsHospitalIdManagersManagerId(hospitalId, managerId)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID_START = 's/Affiliations/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID = 's/Affiliations/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID = boolean

export function deleteApiV1HospitalsHospitalIdManagersManagerId(hospitalId: string, managerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID_START, meta: { info } })
    return Affiliations.deleteApiV1HospitalsHospitalIdManagersManagerId(hospitalId, managerId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_MANAGERS_MANAGER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
