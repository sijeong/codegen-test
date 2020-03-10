/// <reference path="types.ts"/>
/** @module Doctors */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/doctors
 *     {
 *         "userName": "cloudDoctor",
 *         "email": "doctor@icloudhospital.com",
 *         "hospitalId": 1,
 *         "firstName": "cloud",
 *         "lastName": "doctor",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T17:57:32.048Z",
 *         "locations": [
 *           {
 *             "locationType": "LivesIn",
 *             "latitude": 0,
 *             "longitude": 0,
 *             "country": "string",
 *             "state": "string",
 *             "county": "string",
 *             "city": "string",
 *             "zipCode": "string",
 *             "address": "string"
 *           }
 *         ]
 *     }
 * 
 * @param {object} options Optional options
 * @param {module:types.CreateDoctorCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Doctors(options?: PostApiV1DoctorsOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1DoctorsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/doctors
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "doctor"
 * 
 * @param {object} options Optional options
 * @param {string} [options.Id] 
 * @param {string} [options.Fullname] 
 * @param {string} [options.Email] 
 * @param {object} [options.Gender] 
 * @param {date} [options.DateOfBirth] 
 * @param {date} [options.Created] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @param {string} [options.hospitalId] 
 * @return {Promise<module:types.DoctorsViewModel>} Success
 */
export function getApiV1Doctors(options?: GetApiV1DoctorsOptions): Promise<api.Response<api.DoctorsViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      Id: options.Id,
      Fullname: options.Fullname,
      Email: options.Email,
      Gender: options.Gender,
      DateOfBirth: gateway.formatDate(options.DateOfBirth, 'date-time'),
      Created: gateway.formatDate(options.Created, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current,
      hospitalId: options.hospitalId
    }
  }
  return gateway.request(getApiV1DoctorsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/doctors/1
 * 
 * @param {string} doctorId 
 * @return {Promise<module:types.DoctorViewModel>} Success
 */
export function getApiV1DoctorsDoctorId(doctorId: string): Promise<api.Response<api.DoctorViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      doctorId
    }
  }
  return gateway.request(getApiV1DoctorsDoctorIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/doctors/1
 *     {
 *         "firstName": "string",
 *         "lastName": "string",
 *         "photo": "string",
 *         "locations": [
 *           {
 *             "locationType": "LivesIn",
 *             "latitude": 0,
 *             "longitude": 0,
 *             "country": "string",
 *             "state": "string",
 *             "county": "string",
 *             "city": "string",
 *             "zipCode": "string",
 *             "address": "string"
 *           }
 *         ]
 *     }
 * 
 * @param {string} doctorId 
 * @param {object} options Optional options
 * @param {module:types.UpdateDoctorCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1DoctorsDoctorId(doctorId: string, options?: PutApiV1DoctorsDoctorIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      doctorId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1DoctorsDoctorIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/doctors/1
 * 
 * @param {string} doctorId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1DoctorsDoctorId(doctorId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      doctorId
    }
  }
  return gateway.request(deleteApiV1DoctorsDoctorIdOperation, parameters)
}

export interface PostApiV1DoctorsOptions {
  body?: api.CreateDoctorCommand
}

export interface GetApiV1DoctorsOptions {
  Id?: string
  Fullname?: string
  Email?: string
  Gender?: any
  DateOfBirth?: Date
  Created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
  hospitalId?: string
}

export interface PutApiV1DoctorsDoctorIdOptions {
  body?: api.UpdateDoctorCommand
}

const postApiV1DoctorsOperation: api.OperationInfo = {
  path: '/api/v1/doctors',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1DoctorsOperation: api.OperationInfo = {
  path: '/api/v1/doctors',
  method: 'get'
}

const getApiV1DoctorsDoctorIdOperation: api.OperationInfo = {
  path: '/api/v1/doctors/{doctorId}',
  method: 'get'
}

const putApiV1DoctorsDoctorIdOperation: api.OperationInfo = {
  path: '/api/v1/doctors/{doctorId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1DoctorsDoctorIdOperation: api.OperationInfo = {
  path: '/api/v1/doctors/{doctorId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
