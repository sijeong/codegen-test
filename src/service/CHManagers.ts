/// <reference path="types.ts"/>
/** @module CHManagers */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/chmanagers
 *     {
 *         "userName": "chmanager",
 *         "email": "chmanger@icloudhospital.com",
 *         "firstName": "cloud",
 *         "lastName": "manager",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T15:28:09.897Z",
 *         "locations": [
 *            {
 *            "locationType": "LivesIn",
 *            "latitude": 0,
 *            "longitude": 0,
 *            "country": "string",
 *            "state": "string",
 *            "county": "string",
 *            "city": "string",
 *            "zipCode": "string",
 *            "address": "string"
 *            }
 *         ]
 *      }
 * 
 * @param {object} options Optional options
 * @param {module:types.CreateCHManagerCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Chmanagers(options?: PostApiV1ChmanagersOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1ChmanagersOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/chmanagers
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "chmanager"
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
 * @return {Promise<module:types.CHManagersViewModel>} Success
 */
export function getApiV1Chmanagers(options?: GetApiV1ChmanagersOptions): Promise<api.Response<api.CHManagersViewModel>> {
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
  return gateway.request(getApiV1ChmanagersOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/chmanagers/1
 * 
 * @param {string} managerId 
 * @param {string} chManagerId 
 * @return {Promise<module:types.CHManagerViewModel>} Success
 */
export function getApiV1ChmanagersChManagerId(managerId: string, chManagerId: string): Promise<api.Response<api.CHManagerViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      managerId,
      chManagerId
    }
  }
  return gateway.request(getApiV1ChmanagersChManagerIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/chmanagers/1
 *     {
 *         "firstName": "cloud",
 *         "lastName": "manager",
 *         "photo": "string",
 *         "locations": [
 *         {
 *             "locationType": "LivesIn",
 *             "latitude": 0,
 *             "longitude": 0,
 *             "country": "string",
 *             "state": "string",
 *             "county": "string",
 *             "city": "string",
 *             "zipCode": "string",
 *             "address": "string"
 *             }
 *         ]
 *     }
 * 
 * @param {string} chManagerId 
 * @param {object} options Optional options
 * @param {module:types.UpdateCHManagerCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1ChmanagersChManagerId(chManagerId: string, options?: PutApiV1ChmanagersChManagerIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      chManagerId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1ChmanagersChManagerIdOperation, parameters)
}

/**
 * Smaple request:
 * 
 *     DELETE /api/v1/chmanagers/1
 * 
 * @param {string} chManagerId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1ChmanagersChManagerId(chManagerId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      chManagerId
    }
  }
  return gateway.request(deleteApiV1ChmanagersChManagerIdOperation, parameters)
}

export interface PostApiV1ChmanagersOptions {
  body?: api.CreateCHManagerCommand
}

export interface GetApiV1ChmanagersOptions {
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

export interface PutApiV1ChmanagersChManagerIdOptions {
  body?: api.UpdateCHManagerCommand
}

const postApiV1ChmanagersOperation: api.OperationInfo = {
  path: '/api/v1/chmanagers',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1ChmanagersOperation: api.OperationInfo = {
  path: '/api/v1/chmanagers',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1ChmanagersChManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/chmanagers/{chManagerId}',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const putApiV1ChmanagersChManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/chmanagers/{chManagerId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1ChmanagersChManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/chmanagers/{chManagerId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
