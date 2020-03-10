/// <reference path="types.ts"/>
/** @module Partners */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/partners
 *     {
 *         "userName": "string",
 *         "email": "string",
 *         "firstName": "string",
 *         "lastName": "string",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T18:04:18.025Z",
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
 * @param {module:types.CreatePartnerCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Partners(options?: PostApiV1PartnersOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1PartnersOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/partners
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "patner"
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
 * @return {Promise<module:types.PartnersViewModel>} Success
 */
export function getApiV1Partners(options?: GetApiV1PartnersOptions): Promise<api.Response<api.PartnersViewModel>> {
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
  return gateway.request(getApiV1PartnersOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/patners/1
 * 
 * @param {string} partnerId 
 * @return {Promise<module:types.PartnerViewModel>} Success
 */
export function getApiV1PartnersPartnerId(partnerId: string): Promise<api.Response<api.PartnerViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      partnerId
    }
  }
  return gateway.request(getApiV1PartnersPartnerIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/patners/1
 *     {
 *         firstName": "string",
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
 * @param {string} partnerId 
 * @param {object} options Optional options
 * @param {module:types.UpdatePartnerCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1PartnersPartnerId(partnerId: string, options?: PutApiV1PartnersPartnerIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      partnerId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1PartnersPartnerIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/partners/1
 * 
 * @param {string} partnerId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1PartnersPartnerId(partnerId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      partnerId
    }
  }
  return gateway.request(deleteApiV1PartnersPartnerIdOperation, parameters)
}

export interface PostApiV1PartnersOptions {
  body?: api.CreatePartnerCommand
}

export interface GetApiV1PartnersOptions {
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

export interface PutApiV1PartnersPartnerIdOptions {
  body?: api.UpdatePartnerCommand
}

const postApiV1PartnersOperation: api.OperationInfo = {
  path: '/api/v1/partners',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1PartnersOperation: api.OperationInfo = {
  path: '/api/v1/partners',
  method: 'get'
}

const getApiV1PartnersPartnerIdOperation: api.OperationInfo = {
  path: '/api/v1/partners/{partnerId}',
  method: 'get'
}

const putApiV1PartnersPartnerIdOperation: api.OperationInfo = {
  path: '/api/v1/partners/{partnerId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1PartnersPartnerIdOperation: api.OperationInfo = {
  path: '/api/v1/partners/{partnerId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
