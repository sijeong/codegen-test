import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Bookings_Type = {
  body?: Types.CreateBookingCommand
}
export type postApiV1Bookings_Response = string
/**
 * POST /api/v1/bookings
 *
 * Sample request:
 *
 *     POST /api/v1/bookings
 *     {
 *         "packageId": 1,
 *         "approximateDateStart": "2020-02-28T06:21:09.698Z",
 *         "approximateDateEnd": "2020-02-28T06:21:09.698Z"
 *     }
 **/
export const postApiV1Bookings = ApiCommon.requestMaker<
  postApiV1Bookings_Type,
  postApiV1Bookings_Response
>({
  id: "postApiV1Bookings",
  path: "/api/v1/bookings",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Bookings_Type = {
  bookingStatus?: any
  Current?: boolean
  isOpen?: boolean
  lastRetrieved?: string
  limit?: number
  page?: number
  searchString?: string
}
export type getApiV1Bookings_Response = Types.BookingsViewModel
/**
 * GET /api/v1/bookings
 *
 * Samaple request:
 *
 *     GET /api/v1/bookings
 **/
export const getApiV1Bookings = ApiCommon.requestMaker<
  getApiV1Bookings_Type,
  getApiV1Bookings_Response
>({
  id: "getApiV1Bookings",
  path: "/api/v1/bookings",
  verb: "GET",
  parameters: [
    { name: "bookingStatus", in: "query" },
    { name: "Current", in: "query" },
    { name: "isOpen", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "page", in: "query" },
    { name: "searchString", in: "query" }
  ]
})

export type getApiV1Booking_Type = {
  bookingId: string
}
export type getApiV1Booking_Response = Types.BookingViewModel
/**
 * GET /api/v1/bookings/{bookingId}
 *
 * Sample request:
 *
 *     GET /api/v1/bookings/1
 **/
export const getApiV1Booking = ApiCommon.requestMaker<
  getApiV1Booking_Type,
  getApiV1Booking_Response
>({
  id: "getApiV1Booking",
  path: "/api/v1/bookings/{bookingId}",
  verb: "GET",
  parameters: [{ name: "bookingId", required: true, in: "path" }]
})

export type putApiV1Booking_Type = {
  body?: Types.UpdateBookingCommand
  bookingId: string
}
export type putApiV1Booking_Response = boolean
/**
 * PUT /api/v1/bookings/{bookingId}
 *
 * Smaple request:
 *
 *     PUT /api/v1/bookings/1
 *     {
 *         "approximateDateStart": "2020-02-28T06:21:09.698Z",
 *         "approximateDateEnd": "2020-02-28T06:21:09.698Z"
 *     }
 **/
export const putApiV1Booking = ApiCommon.requestMaker<
  putApiV1Booking_Type,
  putApiV1Booking_Response
>({
  id: "putApiV1Booking",
  path: "/api/v1/bookings/{bookingId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "bookingId", required: true, in: "path" }
  ]
})

export type deleteApiV1Booking_Type = {
  bookingId: string
}
export type deleteApiV1Booking_Response = boolean
/**
 * DELETE /api/v1/bookings/{bookingId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/bookings/1
 **/
export const deleteApiV1Booking = ApiCommon.requestMaker<
  deleteApiV1Booking_Type,
  deleteApiV1Booking_Response
>({
  id: "deleteApiV1Booking",
  path: "/api/v1/bookings/{bookingId}",
  verb: "DELETE",
  parameters: [{ name: "bookingId", required: true, in: "path" }]
})
