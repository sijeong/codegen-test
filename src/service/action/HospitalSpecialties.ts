/// <reference path="../types.ts"/>
/** @module action/HospitalSpecialties */
// Auto-generated, edits will be overwritten
import * as HospitalSpecialties from '../HospitalSpecialties'

export const POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_START = 's/HospitalSpecialties/POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_START'
export const POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID = 's/HospitalSpecialties/POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID'
export type POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID = api.HospitalSpecialtyViewModel

export function postApiV1HospitalsHospitalIdSpecialtiesSpecialtyId(hospitalId: string, specialtyId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_START, meta: { info } })
    return HospitalSpecialties.postApiV1HospitalsHospitalIdSpecialtiesSpecialtyId(hospitalId, specialtyId)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_START = 's/HospitalSpecialties/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID = 's/HospitalSpecialties/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID = boolean

export function deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyId(hospitalId: string, specialtyId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_START, meta: { info } })
    return HospitalSpecialties.deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyId(hospitalId, specialtyId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE_START = 's/HospitalSpecialties/PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE_START'
export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE = 's/HospitalSpecialties/PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE'
export type PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE = boolean

export function putApiV1HospitalsHospitalIdSpecialtysequence(hospitalId: string, SpecialtyTypeId: string, options?: HospitalSpecialties.PutApiV1HospitalsHospitalIdSpecialtysequenceOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE_START, meta: { info } })
    return HospitalSpecialties.putApiV1HospitalsHospitalIdSpecialtysequence(hospitalId, SpecialtyTypeId, options)
      .then(response => dispatch({
        type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTYSEQUENCE,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_SPECIALTIES_START = 's/HospitalSpecialties/GET_API_V1_HOSPITALS_SPECIALTIES_START'
export const GET_API_V1_HOSPITALS_SPECIALTIES = 's/HospitalSpecialties/GET_API_V1_HOSPITALS_SPECIALTIES'
export type GET_API_V1_HOSPITALS_SPECIALTIES = api.HospitalSpecialtiesViewModel

export function getApiV1HospitalsSpecialties(options?: HospitalSpecialties.GetApiV1HospitalsSpecialtiesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_SPECIALTIES_START, meta: { info } })
    return HospitalSpecialties.getApiV1HospitalsSpecialties(options)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_SPECIALTIES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
