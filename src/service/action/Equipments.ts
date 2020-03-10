/// <reference path="../types.ts"/>
/** @module action/Equipments */
// Auto-generated, edits will be overwritten
import * as Equipments from '../Equipments'

export const POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_START = 's/Equipments/POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_START'
export const POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS = 's/Equipments/POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS'
export type POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS = string

export function postApiV1HospitalsHospitalIdEquipments(hospitalId: string, options?: Equipments.PostApiV1HospitalsHospitalIdEquipmentsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_START, meta: { info } })
    return Equipments.postApiV1HospitalsHospitalIdEquipments(hospitalId, options)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START = 's/Equipments/GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START'
export const GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID = 's/Equipments/GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID'
export type GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID = api.EquipmentViewModel

export function getApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId: number, equipmentId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START, meta: { info } })
    return Equipments.getApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId, equipmentId)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START = 's/Equipments/PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START'
export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID = 's/Equipments/PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID'
export type PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID = boolean

export function putApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId: string, equipmentId: string, options?: Equipments.PutApiV1HospitalsHospitalIdEquipmentsEquipmentIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START, meta: { info } })
    return Equipments.putApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId, equipmentId, options)
      .then(response => dispatch({
        type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START = 's/Equipments/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID = 's/Equipments/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID = boolean

export function deleteApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId: string, equipmentId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID_START, meta: { info } })
    return Equipments.deleteApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId, equipmentId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_EQUIPMENTS_EQUIPMENT_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_EQUIPMENTS_START = 's/Equipments/GET_API_V1_HOSPITALS_EQUIPMENTS_START'
export const GET_API_V1_HOSPITALS_EQUIPMENTS = 's/Equipments/GET_API_V1_HOSPITALS_EQUIPMENTS'
export type GET_API_V1_HOSPITALS_EQUIPMENTS = api.EquipmentsViewModel

export function getApiV1HospitalsEquipments(options?: Equipments.GetApiV1HospitalsEquipmentsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_EQUIPMENTS_START, meta: { info } })
    return Equipments.getApiV1HospitalsEquipments(options)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_EQUIPMENTS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
