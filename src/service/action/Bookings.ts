/// <reference path="../types.ts"/>
/** @module action/Bookings */
// Auto-generated, edits will be overwritten
import * as Bookings from '../Bookings'

export const POST_API_V1_BOOKINGS_START = 's/Bookings/POST_API_V1_BOOKINGS_START'
export const POST_API_V1_BOOKINGS = 's/Bookings/POST_API_V1_BOOKINGS'
export type POST_API_V1_BOOKINGS = string

export function postApiV1Bookings(options?: Bookings.PostApiV1BookingsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_BOOKINGS_START, meta: { info } })
    return Bookings.postApiV1Bookings(options)
      .then(response => dispatch({
        type: POST_API_V1_BOOKINGS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_BOOKINGS_START = 's/Bookings/GET_API_V1_BOOKINGS_START'
export const GET_API_V1_BOOKINGS = 's/Bookings/GET_API_V1_BOOKINGS'
export type GET_API_V1_BOOKINGS = api.BookingsViewModel

export function getApiV1Bookings(options?: Bookings.GetApiV1BookingsOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_BOOKINGS_START, meta: { info } })
    return Bookings.getApiV1Bookings(options)
      .then(response => dispatch({
        type: GET_API_V1_BOOKINGS,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_BOOKINGS_BOOKING_ID_START = 's/Bookings/GET_API_V1_BOOKINGS_BOOKING_ID_START'
export const GET_API_V1_BOOKINGS_BOOKING_ID = 's/Bookings/GET_API_V1_BOOKINGS_BOOKING_ID'
export type GET_API_V1_BOOKINGS_BOOKING_ID = api.BookingViewModel

export function getApiV1BookingsBookingId(bookingId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_BOOKINGS_BOOKING_ID_START, meta: { info } })
    return Bookings.getApiV1BookingsBookingId(bookingId)
      .then(response => dispatch({
        type: GET_API_V1_BOOKINGS_BOOKING_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_BOOKINGS_BOOKING_ID_START = 's/Bookings/PUT_API_V1_BOOKINGS_BOOKING_ID_START'
export const PUT_API_V1_BOOKINGS_BOOKING_ID = 's/Bookings/PUT_API_V1_BOOKINGS_BOOKING_ID'
export type PUT_API_V1_BOOKINGS_BOOKING_ID = boolean

export function putApiV1BookingsBookingId(bookingId: string, options?: Bookings.PutApiV1BookingsBookingIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_BOOKINGS_BOOKING_ID_START, meta: { info } })
    return Bookings.putApiV1BookingsBookingId(bookingId, options)
      .then(response => dispatch({
        type: PUT_API_V1_BOOKINGS_BOOKING_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_BOOKINGS_BOOKING_ID_START = 's/Bookings/DELETE_API_V1_BOOKINGS_BOOKING_ID_START'
export const DELETE_API_V1_BOOKINGS_BOOKING_ID = 's/Bookings/DELETE_API_V1_BOOKINGS_BOOKING_ID'
export type DELETE_API_V1_BOOKINGS_BOOKING_ID = boolean

export function deleteApiV1BookingsBookingId(bookingId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_BOOKINGS_BOOKING_ID_START, meta: { info } })
    return Bookings.deleteApiV1BookingsBookingId(bookingId)
      .then(response => dispatch({
        type: DELETE_API_V1_BOOKINGS_BOOKING_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
