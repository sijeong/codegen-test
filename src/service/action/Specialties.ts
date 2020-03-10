/// <reference path="../types.ts"/>
/** @module action/Specialties */
// Auto-generated, edits will be overwritten
import * as Specialties from '../Specialties'

export const POST_API_V1_SPECIALTIES_START = 's/Specialties/POST_API_V1_SPECIALTIES_START'
export const POST_API_V1_SPECIALTIES = 's/Specialties/POST_API_V1_SPECIALTIES'
export type POST_API_V1_SPECIALTIES = string

export function postApiV1Specialties(options?: Specialties.PostApiV1SpecialtiesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_SPECIALTIES_START, meta: { info } })
    return Specialties.postApiV1Specialties(options)
      .then(response => dispatch({
        type: POST_API_V1_SPECIALTIES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_SPECIALTIES_START = 's/Specialties/GET_API_V1_SPECIALTIES_START'
export const GET_API_V1_SPECIALTIES = 's/Specialties/GET_API_V1_SPECIALTIES'
export type GET_API_V1_SPECIALTIES = api.SpecialtiesViewModel

export function getApiV1Specialties(options?: Specialties.GetApiV1SpecialtiesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_SPECIALTIES_START, meta: { info } })
    return Specialties.getApiV1Specialties(options)
      .then(response => dispatch({
        type: GET_API_V1_SPECIALTIES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_SPECIALTIES_SPECIALTY_ID_START = 's/Specialties/GET_API_V1_SPECIALTIES_SPECIALTY_ID_START'
export const GET_API_V1_SPECIALTIES_SPECIALTY_ID = 's/Specialties/GET_API_V1_SPECIALTIES_SPECIALTY_ID'
export type GET_API_V1_SPECIALTIES_SPECIALTY_ID = api.SpecialtyViewModel

export function getApiV1SpecialtiesSpecialtyId(specialtyId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_SPECIALTIES_SPECIALTY_ID_START, meta: { info } })
    return Specialties.getApiV1SpecialtiesSpecialtyId(specialtyId)
      .then(response => dispatch({
        type: GET_API_V1_SPECIALTIES_SPECIALTY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_SPECIALTIES_SPECIALTY_ID_START = 's/Specialties/PUT_API_V1_SPECIALTIES_SPECIALTY_ID_START'
export const PUT_API_V1_SPECIALTIES_SPECIALTY_ID = 's/Specialties/PUT_API_V1_SPECIALTIES_SPECIALTY_ID'
export type PUT_API_V1_SPECIALTIES_SPECIALTY_ID = boolean

export function putApiV1SpecialtiesSpecialtyId(specialtyId: string, options?: Specialties.PutApiV1SpecialtiesSpecialtyIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_SPECIALTIES_SPECIALTY_ID_START, meta: { info } })
    return Specialties.putApiV1SpecialtiesSpecialtyId(specialtyId, options)
      .then(response => dispatch({
        type: PUT_API_V1_SPECIALTIES_SPECIALTY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_SPECIALTIES_SPECIALTY_ID_START = 's/Specialties/DELETE_API_V1_SPECIALTIES_SPECIALTY_ID_START'
export const DELETE_API_V1_SPECIALTIES_SPECIALTY_ID = 's/Specialties/DELETE_API_V1_SPECIALTIES_SPECIALTY_ID'
export type DELETE_API_V1_SPECIALTIES_SPECIALTY_ID = boolean

export function deleteApiV1SpecialtiesSpecialtyId(specialtyId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_SPECIALTIES_SPECIALTY_ID_START, meta: { info } })
    return Specialties.deleteApiV1SpecialtiesSpecialtyId(specialtyId)
      .then(response => dispatch({
        type: DELETE_API_V1_SPECIALTIES_SPECIALTY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
