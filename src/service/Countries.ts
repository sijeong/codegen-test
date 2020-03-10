/// <reference path="types.ts"/>
/** @module Countries */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/countries
 *     {
 *         "name": "Korea",
 *         "description": "Republic of Korea",
 *         "medias": [
 *             {
 *                 "mediaType": "Photo",
 *                 "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SouthKorea.png",
 *                 "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SouthKorea.png",
 *                 "description": "string"
 *             }
 *         ]
 *     }
 * 
 * @param {object} options Optional options
 * @param {module:types.CreateCountryCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Countries(options?: PostApiV1CountriesOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1CountriesOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/countries
 *     {
 *         "countryPageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         }
 *     }
 * 
 * @param {object} options Optional options
 * @param {string} [options.Id] 
 * @param {string} [options.Name] 
 * @param {string} [options.Description] 
 * @param {date} [options.CreatedDate] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @return {Promise<module:types.CountriesViewModel>} Success
 */
export function getApiV1Countries(options?: GetApiV1CountriesOptions): Promise<api.Response<api.CountriesViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      Id: options.Id,
      Name: options.Name,
      Description: options.Description,
      CreatedDate: gateway.formatDate(options.CreatedDate, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current
    }
  }
  return gateway.request(getApiV1CountriesOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/countries/1
 * 
 * @param {string} countryId 
 * @return {Promise<module:types.CountryViewModel>} Success
 */
export function getApiV1CountriesCountryId(countryId: string): Promise<api.Response<api.CountryViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      countryId
    }
  }
  return gateway.request(getApiV1CountriesCountryIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/countries/1
 *     {
 *         "name": "USA",
 *         "description": "United States of America"
 *         "medias": [
 *           {
 *             "mediaType": 0,
 *             "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SouthKorea.png",
 *             "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SouthKorea.png"
 *             "description": "string",
 *             "order": 0
 *           },
 *           {
 *             "mediaType": 1,
 *             "url": "string",
 *             "description": "string",
 *             "order": 1
 *           }
 *         ],
 *     }
 * 
 * @param {string} countryId 
 * @param {object} options Optional options
 * @param {module:types.UpdateCountryCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1CountriesCountryId(countryId: string, options?: PutApiV1CountriesCountryIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      countryId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1CountriesCountryIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/countries/1
 * 
 * @param {string} countryId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1CountriesCountryId(countryId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      countryId
    }
  }
  return gateway.request(deleteApiV1CountriesCountryIdOperation, parameters)
}

export interface PostApiV1CountriesOptions {
  body?: api.CreateCountryCommand
}

export interface GetApiV1CountriesOptions {
  Id?: string
  Name?: string
  Description?: string
  CreatedDate?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
}

export interface PutApiV1CountriesCountryIdOptions {
  body?: api.UpdateCountryCommand
}

const postApiV1CountriesOperation: api.OperationInfo = {
  path: '/api/v1/countries',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1CountriesOperation: api.OperationInfo = {
  path: '/api/v1/countries',
  method: 'get'
}

const getApiV1CountriesCountryIdOperation: api.OperationInfo = {
  path: '/api/v1/countries/{countryId}',
  method: 'get'
}

const putApiV1CountriesCountryIdOperation: api.OperationInfo = {
  path: '/api/v1/countries/{countryId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1CountriesCountryIdOperation: api.OperationInfo = {
  path: '/api/v1/countries/{countryId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
