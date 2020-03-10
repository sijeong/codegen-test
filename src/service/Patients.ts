/// <reference path="types.ts"/>
/** @module Patients */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/patients
 *     {
 *         "referralCode": "123456",
 *         "email": "patient@icloudhospital.com",
 *         "firstName": "patient",
 *         "lastName": "cloud",
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
 * @param {object} options Optional options
 * @param {module:types.CreatePatientCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Patients(options?: PostApiV1PatientsOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1PatientsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/patients
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "patient"
 *     }
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
 * @return {Promise<module:types.PatientsViewModel>} Success
 */
export function getApiV1Patients(options?: GetApiV1PatientsOptions): Promise<api.Response<api.PatientsViewModel>> {
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
      Current: options.Current
    }
  }
  return gateway.request(getApiV1PatientsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/patients/1
 * 
 * @param {string} patientId 
 * @return {Promise<module:types.PatientViewModel>} Success
 */
export function getApiV1PatientsPatientId(patientId: string): Promise<api.Response<api.PatientViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      patientId
    }
  }
  return gateway.request(getApiV1PatientsPatientIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/patients/1
 *     {
 *         "referralCode": "string",
 *         "firstName": "patient",
 *         "lastName": "cloud",
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
 * @param {string} patientId 
 * @param {object} options Optional options
 * @param {module:types.UpdatePatientCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1PatientsPatientId(patientId: string, options?: PutApiV1PatientsPatientIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      patientId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1PatientsPatientIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/patients/1
 * 
 * @param {string} patientId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1PatientsPatientId(patientId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      patientId
    }
  }
  return gateway.request(deleteApiV1PatientsPatientIdOperation, parameters)
}

export interface PostApiV1PatientsOptions {
  body?: api.CreatePatientCommand
}

export interface GetApiV1PatientsOptions {
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
}

export interface PutApiV1PatientsPatientIdOptions {
  body?: api.UpdatePatientCommand
}

const postApiV1PatientsOperation: api.OperationInfo = {
  path: '/api/v1/patients',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1PatientsOperation: api.OperationInfo = {
  path: '/api/v1/patients',
  method: 'get'
}

const getApiV1PatientsPatientIdOperation: api.OperationInfo = {
  path: '/api/v1/patients/{patientId}',
  method: 'get'
}

const putApiV1PatientsPatientIdOperation: api.OperationInfo = {
  path: '/api/v1/patients/{patientId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1PatientsPatientIdOperation: api.OperationInfo = {
  path: '/api/v1/patients/{patientId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
