/// <reference path="types.ts"/>
/** @module Bookings */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/bookings
 *     {
 *         "packageId": 1,
 *         "approximateDateStart": "2020-02-28T06:21:09.698Z",
 *         "approximateDateEnd": "2020-02-28T06:21:09.698Z"
 *     }
 * 
 * @param {object} options Optional options
 * @param {module:types.CreateBookingCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Bookings(options?: PostApiV1BookingsOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1BookingsOperation, parameters)
}

/**
 * Samaple request:
 * 
 *     GET /api/v1/bookings
 * 
 * @param {object} options Optional options
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @param {string} [options.searchString] 
 * @param {boolean} [options.isOpen] 
 * @param {object} [options.bookingStatus] 
 * @return {Promise<module:types.BookingsViewModel>} Success
 */
export function getApiV1Bookings(options?: GetApiV1BookingsOptions): Promise<api.Response<api.BookingsViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current,
      searchString: options.searchString,
      isOpen: options.isOpen,
      bookingStatus: options.bookingStatus
    }
  }
  return gateway.request(getApiV1BookingsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/bookings/1
 * 
 * @param {string} bookingId 
 * @return {Promise<module:types.BookingViewModel>} Success
 */
export function getApiV1BookingsBookingId(bookingId: string): Promise<api.Response<api.BookingViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      bookingId
    }
  }
  return gateway.request(getApiV1BookingsBookingIdOperation, parameters)
}

/**
 * Smaple request:
 * 
 *     PUT /api/v1/bookings/1
 *     {
 *         "approximateDateStart": "2020-02-28T06:21:09.698Z",
 *         "approximateDateEnd": "2020-02-28T06:21:09.698Z"
 *     }
 * 
 * @param {string} bookingId 
 * @param {object} options Optional options
 * @param {module:types.UpdateBookingCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1BookingsBookingId(bookingId: string, options?: PutApiV1BookingsBookingIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      bookingId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1BookingsBookingIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/bookings/1
 * 
 * @param {string} bookingId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1BookingsBookingId(bookingId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      bookingId
    }
  }
  return gateway.request(deleteApiV1BookingsBookingIdOperation, parameters)
}

export interface PostApiV1BookingsOptions {
  body?: api.CreateBookingCommand
}

export interface GetApiV1BookingsOptions {
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
  searchString?: string
  isOpen?: boolean
  bookingStatus?: any
}

export interface PutApiV1BookingsBookingIdOptions {
  body?: api.UpdateBookingCommand
}

const postApiV1BookingsOperation: api.OperationInfo = {
  path: '/api/v1/bookings',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1BookingsOperation: api.OperationInfo = {
  path: '/api/v1/bookings',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1BookingsBookingIdOperation: api.OperationInfo = {
  path: '/api/v1/bookings/{bookingId}',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const putApiV1BookingsBookingIdOperation: api.OperationInfo = {
  path: '/api/v1/bookings/{bookingId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1BookingsBookingIdOperation: api.OperationInfo = {
  path: '/api/v1/bookings/{bookingId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
