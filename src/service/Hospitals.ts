/// <reference path="types.ts"/>
/** @module Hospitals */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals
 *     {
 *         "name": "Samsung Medical Center",
 *         "description": "Comprehensive Cancer Center in Seoul, South Korea is nationally ranked in 1 adult specialty.",
 *         "logo": "http://www.samsunghospital.com/home/main/index.do",
 *         "overview": "Overview of Samsung Medical Center",
 *         "bedsCount": 1436,
 *         "operationRoomsCount": 34,
 *         "icuBedsCount": 12,
 *         "departmentsCount": 20,
 *         "medicalStaffCount": 600,
 *         "countryId": 1,
 *         "awards": [
 *           {
 *             "name": "Award1",
 *             "image": "string",
 *             "date": "2020-02-05T09:29:19.240Z"
 *           },
 *           {
 *             "name": "Award2",
 *             "image": "string",
 *             "date": "2020-02-05T09:29:19.240Z"
 *           }
 *         ],
 *         "medias": [
 *           {
 *             "mediaType": "Photo",
 *             "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SamsungMedicalCenter.jpg",
 *             "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SamsungMedicalCenter.jpg",
 *             "description": "string",
 *             "order": 0
 *           },
 *           {
 *             "mediaType": "Video",
 *             "url": "string",
 *             "description": "string",
 *             "order": 1
 *           }
 *         ],
 *         "location": {
 *           "latitude": 37.4881568,
 *           "longitude": 127.0855952,
 *           "country": "Korea",
 *           "state": "string",
 *           "county": "Gangnamgu",
 *           "city": "Seoul",
 *           "zipCode": "12345",
 *           "address": "Il-won ro 81"
 *         }
 *     }
 * 
 * @param {object} options Optional options
 * @param {module:types.CreateHospitalCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Hospitals(options?: PostApiV1HospitalsOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1HospitalsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "Samsung"
 *     }
 * 
 * @param {object} options Optional options
 * @param {string} [options.Id] 
 * @param {string} [options.Name] 
 * @param {string} [options.Description] 
 * @param {string} [options.CountryId] 
 * @param {date} [options.Created] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @return {Promise<module:types.HospitalsViewModel>} Success
 */
export function getApiV1Hospitals(options?: GetApiV1HospitalsOptions): Promise<api.Response<api.HospitalsViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      Id: options.Id,
      Name: options.Name,
      Description: options.Description,
      CountryId: options.CountryId,
      Created: gateway.formatDate(options.Created, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current
    }
  }
  return gateway.request(getApiV1HospitalsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/1
 * 
 * @param {string} hospitalId 
 * @return {Promise<module:types.HospitalViewModel>} Success
 */
export function getApiV1HospitalsHospitalId(hospitalId: string): Promise<api.Response<api.HospitalViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId
    }
  }
  return gateway.request(getApiV1HospitalsHospitalIdOperation, parameters)
}

/**
 * Sameple request:
 * 
 *     PUT /api/v1/hospitals
 *     {
 *         "overview": "Overview of Samsung Medical Center",
 *         "bedsCount": 2436,
 *         "operationRoomsCount": 44,
 *         "icuBedsCount": 122,
 *         "departmentsCount": 200,
 *         "medicalStaffCount": 1200,
 *     }
 * 
 * @param {string} hospitalId 
 * @param {object} options Optional options
 * @param {module:types.UpdateHospitalCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1HospitalsHospitalId(hospitalId: string, options?: PutApiV1HospitalsHospitalIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1HospitalsHospitalIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1
 * 
 * @param {string} hospitalId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalId(hospitalId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdOperation, parameters)
}

export interface PostApiV1HospitalsOptions {
  body?: api.CreateHospitalCommand
}

export interface GetApiV1HospitalsOptions {
  Id?: string
  Name?: string
  Description?: string
  CountryId?: string
  Created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
}

export interface PutApiV1HospitalsHospitalIdOptions {
  body?: api.UpdateHospitalCommand
}

const postApiV1HospitalsOperation: api.OperationInfo = {
  path: '/api/v1/hospitals',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsOperation: api.OperationInfo = {
  path: '/api/v1/hospitals',
  method: 'get'
}

const getApiV1HospitalsHospitalIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}',
  method: 'get'
}

const putApiV1HospitalsHospitalIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
