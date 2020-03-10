/// <reference path="../types.ts"/>
/** @module action/Services */
// Auto-generated, edits will be overwritten
import * as Services from '../Services'

export const POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_START = 's/Services/POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_START'
export const POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES = 's/Services/POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES'
export type POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES = string

export function postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServices(hospitalId: string, specialtyId: string, options?: Services.PostApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_START, meta: { info } })
    return Services.postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServices(hospitalId, specialtyId, options)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START = 's/Services/GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START'
export const GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID = 's/Services/GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID'
export type GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID = api.ServiceViewModel

export function getApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId: number, specialtyId: number, serviceId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START, meta: { info } })
    return Services.getApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId, specialtyId, serviceId)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START = 's/Services/PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START'
export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID = 's/Services/PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID'
export type PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID = boolean

export function putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId: string, specialtyId: string, serviceId: string, options?: Services.PutApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START, meta: { info } })
    return Services.putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId, specialtyId, serviceId, options)
      .then(response => dispatch({
        type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START = 's/Services/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID = 's/Services/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID = boolean

export function deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId: string, specialtyId: string, serviceId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID_START, meta: { info } })
    return Services.deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId, specialtyId, serviceId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICES_SERVICE_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE_START = 's/Services/PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE_START'
export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE = 's/Services/PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE'
export type PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE = boolean

export function putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquence(hospitalId: string, specialtyId: string, options?: Services.PutApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquenceOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE_START, meta: { info } })
    return Services.putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquence(hospitalId, specialtyId, options)
      .then(response => dispatch({
        type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_SPECIALTIES_SPECIALTY_ID_SERVICESQUENCE,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_SERVICES_START = 's/Services/GET_API_V1_HOSPITALS_SERVICES_START'
export const GET_API_V1_HOSPITALS_SERVICES = 's/Services/GET_API_V1_HOSPITALS_SERVICES'
export type GET_API_V1_HOSPITALS_SERVICES = api.ServicesViewModel

export function getApiV1HospitalsServices(options?: Services.GetApiV1HospitalsServicesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_SERVICES_START, meta: { info } })
    return Services.getApiV1HospitalsServices(options)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_SERVICES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
