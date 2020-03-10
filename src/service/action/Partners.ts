/// <reference path="../types.ts"/>
/** @module action/Partners */
// Auto-generated, edits will be overwritten
import * as Partners from '../Partners'

export const POST_API_V1_PARTNERS_START = 's/Partners/POST_API_V1_PARTNERS_START'
export const POST_API_V1_PARTNERS = 's/Partners/POST_API_V1_PARTNERS'
export type POST_API_V1_PARTNERS = string

export function postApiV1Partners(options?: Partners.PostApiV1PartnersOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_PARTNERS_START, meta: { info } })
    return Partners.postApiV1Partners(options)
      .then(response => dispatch({
        type: POST_API_V1_PARTNERS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_PARTNERS_START = 's/Partners/GET_API_V1_PARTNERS_START'
export const GET_API_V1_PARTNERS = 's/Partners/GET_API_V1_PARTNERS'
export type GET_API_V1_PARTNERS = api.PartnersViewModel

export function getApiV1Partners(options?: Partners.GetApiV1PartnersOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_PARTNERS_START, meta: { info } })
    return Partners.getApiV1Partners(options)
      .then(response => dispatch({
        type: GET_API_V1_PARTNERS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_PARTNERS_PARTNER_ID_START = 's/Partners/GET_API_V1_PARTNERS_PARTNER_ID_START'
export const GET_API_V1_PARTNERS_PARTNER_ID = 's/Partners/GET_API_V1_PARTNERS_PARTNER_ID'
export type GET_API_V1_PARTNERS_PARTNER_ID = api.PartnerViewModel

export function getApiV1PartnersPartnerId(partnerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_PARTNERS_PARTNER_ID_START, meta: { info } })
    return Partners.getApiV1PartnersPartnerId(partnerId)
      .then(response => dispatch({
        type: GET_API_V1_PARTNERS_PARTNER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_PARTNERS_PARTNER_ID_START = 's/Partners/PUT_API_V1_PARTNERS_PARTNER_ID_START'
export const PUT_API_V1_PARTNERS_PARTNER_ID = 's/Partners/PUT_API_V1_PARTNERS_PARTNER_ID'
export type PUT_API_V1_PARTNERS_PARTNER_ID = boolean

export function putApiV1PartnersPartnerId(partnerId: string, options?: Partners.PutApiV1PartnersPartnerIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_PARTNERS_PARTNER_ID_START, meta: { info } })
    return Partners.putApiV1PartnersPartnerId(partnerId, options)
      .then(response => dispatch({
        type: PUT_API_V1_PARTNERS_PARTNER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_PARTNERS_PARTNER_ID_START = 's/Partners/DELETE_API_V1_PARTNERS_PARTNER_ID_START'
export const DELETE_API_V1_PARTNERS_PARTNER_ID = 's/Partners/DELETE_API_V1_PARTNERS_PARTNER_ID'
export type DELETE_API_V1_PARTNERS_PARTNER_ID = boolean

export function deleteApiV1PartnersPartnerId(partnerId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_PARTNERS_PARTNER_ID_START, meta: { info } })
    return Partners.deleteApiV1PartnersPartnerId(partnerId)
      .then(response => dispatch({
        type: DELETE_API_V1_PARTNERS_PARTNER_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
