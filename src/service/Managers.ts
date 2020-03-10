/// <reference path="types.ts"/>
/** @module Managers */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/managers
 *     {
 *         "userName": "manager",
 *         "email": "manger@icloudhospital.com",
 *         "hospitalId": 1,
 *         "firstName": "cloud",
 *         "lastName": "manager",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T15:28:09.897Z",
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
 * @param {module:types.CreateManagerCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Managers(options?: PostApiV1ManagersOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1ManagersOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/managers
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "manager"
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
 * @param {string} [options.hospitalId] 
 * @return {Promise<module:types.ManagersViewModel>} Success
 */
export function getApiV1Managers(options?: GetApiV1ManagersOptions): Promise<api.Response<api.ManagersViewModel>> {
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
  return gateway.request(getApiV1ManagersOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/managers/1
 * 
 * @param {string} managerId 
 * @return {Promise<module:types.ManagerViewModel>} Success
 */
export function getApiV1ManagersManagerId(managerId: string): Promise<api.Response<api.ManagerViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      managerId
    }
  }
  return gateway.request(getApiV1ManagersManagerIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/managers/1
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
 * @param {string} managerId 
 * @param {object} options Optional options
 * @param {module:types.UpdateManagerCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1ManagersManagerId(managerId: string, options?: PutApiV1ManagersManagerIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      managerId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1ManagersManagerIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/managers/1
 * 
 * @param {string} managerId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1ManagersManagerId(managerId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      managerId
    }
  }
  return gateway.request(deleteApiV1ManagersManagerIdOperation, parameters)
}

export interface PostApiV1ManagersOptions {
  body?: api.CreateManagerCommand
}

export interface GetApiV1ManagersOptions {
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

export interface PutApiV1ManagersManagerIdOptions {
  body?: api.UpdateManagerCommand
}

const postApiV1ManagersOperation: api.OperationInfo = {
  path: '/api/v1/managers',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1ManagersOperation: api.OperationInfo = {
  path: '/api/v1/managers',
  method: 'get'
}

const getApiV1ManagersManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/managers/{managerId}',
  method: 'get'
}

const putApiV1ManagersManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/managers/{managerId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1ManagersManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/managers/{managerId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
