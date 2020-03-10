/// <reference path="../types.ts"/>
/** @module action/Countries */
// Auto-generated, edits will be overwritten
import * as Countries from '../Countries'

export const POST_API_V1_COUNTRIES_START = 's/Countries/POST_API_V1_COUNTRIES_START'
export const POST_API_V1_COUNTRIES = 's/Countries/POST_API_V1_COUNTRIES'
export type POST_API_V1_COUNTRIES = string

export function postApiV1Countries(options?: Countries.PostApiV1CountriesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_COUNTRIES_START, meta: { info } })
    return Countries.postApiV1Countries(options)
      .then(response => dispatch({
        type: POST_API_V1_COUNTRIES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_COUNTRIES_START = 's/Countries/GET_API_V1_COUNTRIES_START'
export const GET_API_V1_COUNTRIES = 's/Countries/GET_API_V1_COUNTRIES'
export type GET_API_V1_COUNTRIES = api.CountriesViewModel

export function getApiV1Countries(options?: Countries.GetApiV1CountriesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_COUNTRIES_START, meta: { info } })
    return Countries.getApiV1Countries(options)
      .then(response => dispatch({
        type: GET_API_V1_COUNTRIES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_COUNTRIES_COUNTRY_ID_START = 's/Countries/GET_API_V1_COUNTRIES_COUNTRY_ID_START'
export const GET_API_V1_COUNTRIES_COUNTRY_ID = 's/Countries/GET_API_V1_COUNTRIES_COUNTRY_ID'
export type GET_API_V1_COUNTRIES_COUNTRY_ID = api.CountryViewModel

export function getApiV1CountriesCountryId(countryId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_COUNTRIES_COUNTRY_ID_START, meta: { info } })
    return Countries.getApiV1CountriesCountryId(countryId)
      .then(response => dispatch({
        type: GET_API_V1_COUNTRIES_COUNTRY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_COUNTRIES_COUNTRY_ID_START = 's/Countries/PUT_API_V1_COUNTRIES_COUNTRY_ID_START'
export const PUT_API_V1_COUNTRIES_COUNTRY_ID = 's/Countries/PUT_API_V1_COUNTRIES_COUNTRY_ID'
export type PUT_API_V1_COUNTRIES_COUNTRY_ID = boolean

export function putApiV1CountriesCountryId(countryId: string, options?: Countries.PutApiV1CountriesCountryIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_COUNTRIES_COUNTRY_ID_START, meta: { info } })
    return Countries.putApiV1CountriesCountryId(countryId, options)
      .then(response => dispatch({
        type: PUT_API_V1_COUNTRIES_COUNTRY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_COUNTRIES_COUNTRY_ID_START = 's/Countries/DELETE_API_V1_COUNTRIES_COUNTRY_ID_START'
export const DELETE_API_V1_COUNTRIES_COUNTRY_ID = 's/Countries/DELETE_API_V1_COUNTRIES_COUNTRY_ID'
export type DELETE_API_V1_COUNTRIES_COUNTRY_ID = boolean

export function deleteApiV1CountriesCountryId(countryId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_COUNTRIES_COUNTRY_ID_START, meta: { info } })
    return Countries.deleteApiV1CountriesCountryId(countryId)
      .then(response => dispatch({
        type: DELETE_API_V1_COUNTRIES_COUNTRY_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
