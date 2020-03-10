/// <reference path="types.ts"/>
/** @module CHAdmins */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/chadmins
 *     {
 *         "firstName": "Cloud",
 *         "lastName": "Hospital",
 *         "photo": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "photoThumbnail": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T09:09:19.082Z",
 *         "locations": [
 *             {
 *                 "locationType": "LivesIn",
 *                 "latitude": 0,
 *                 "longitude": 0,
 *                 "country": "string",
 *                 "state": "string",
 *                 "county": "string",
 *                 "city": "string",
 *                 "zipCode": "string",
 *                 "address": "string"
 *             }
 *         ]
 *     }
 * 
 * @param {object} options Optional options
 * @param {module:types.CreateCHAdminCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Chadmins(options?: PostApiV1ChadminsOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1ChadminsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/chadmin
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "admin"
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
 * @return {Promise<module:types.CHAdminsViewModel>} Success
 */
export function getApiV1Chadmins(options?: GetApiV1ChadminsOptions): Promise<api.Response<api.CHAdminsViewModel>> {
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
  return gateway.request(getApiV1ChadminsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/chadmins/1
 * 
 * @param {string} chAdminId 
 * @return {Promise<module:types.CHAdminViewModel>} Success
 */
export function getApiV1ChadminsChAdminId(chAdminId: string): Promise<api.Response<api.CHAdminViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      chAdminId
    }
  }
  return gateway.request(getApiV1ChadminsChAdminIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/chadmins/1
 *     {
 *         "email": "adminupdate@icloudhospital.com",
 *         "firstName": "Cloud",
 *         "lastName": "Hospital",
 *         "photo": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "photoThumbnail": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T09:09:19.082Z",
 *         "locations": [
 *             {
 *                 "locationType": "LivesIn",
 *                 "latitude": 0,
 *                 "longitude": 0,
 *                 "country": "string",
 *                 "state": "string",
 *                 "county": "string",
 *                 "city": "string",
 *                 "zipCode": "string",
 *                 "address": "string"
 *             }
 *         ]
 *     }
 * 
 * @param {string} chAdminId 
 * @param {object} options Optional options
 * @param {module:types.UpdateCHAdminCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1ChadminsChAdminId(chAdminId: string, options?: PutApiV1ChadminsChAdminIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      chAdminId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1ChadminsChAdminIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/chadmins/1
 * 
 * @param {string} chAdminId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1ChadminsChAdminId(chAdminId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      chAdminId
    }
  }
  return gateway.request(deleteApiV1ChadminsChAdminIdOperation, parameters)
}

export interface PostApiV1ChadminsOptions {
  body?: api.CreateCHAdminCommand
}

export interface GetApiV1ChadminsOptions {
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

export interface PutApiV1ChadminsChAdminIdOptions {
  body?: api.UpdateCHAdminCommand
}

const postApiV1ChadminsOperation: api.OperationInfo = {
  path: '/api/v1/chadmins',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1ChadminsOperation: api.OperationInfo = {
  path: '/api/v1/chadmins',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1ChadminsChAdminIdOperation: api.OperationInfo = {
  path: '/api/v1/chadmins/{chAdminId}',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const putApiV1ChadminsChAdminIdOperation: api.OperationInfo = {
  path: '/api/v1/chadmins/{chAdminId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1ChadminsChAdminIdOperation: api.OperationInfo = {
  path: '/api/v1/chadmins/{chAdminId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
