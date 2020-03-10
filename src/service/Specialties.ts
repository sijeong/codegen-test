/// <reference path="types.ts"/>
/** @module Specialties */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/specialties
 *     {
 *         "name": "Coronary artery disease",
 *         "description": "Coronary artery disease",
 *         "specialtyType": "Cardiology"
 *     }
 * 
 * @param {object} options Optional options
 * @param {string} [options.specialtyTypeId] 
 * @param {module:types.CreateSpecialtyCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1Specialties(options?: PostApiV1SpecialtiesOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      specialtyTypeId: options.specialtyTypeId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1SpecialtiesOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/specialties
 * 
 * @param {object} options Optional options
 * @param {string} [options.Id] 
 * @param {string} [options.Name] 
 * @param {string} [options.Description] 
 * @param {string} [options.SpecialtyTypeId] 
 * @param {date} [options.Created] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @return {Promise<module:types.SpecialtiesViewModel>} Success
 */
export function getApiV1Specialties(options?: GetApiV1SpecialtiesOptions): Promise<api.Response<api.SpecialtiesViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      Id: options.Id,
      Name: options.Name,
      Description: options.Description,
      SpecialtyTypeId: options.SpecialtyTypeId,
      Created: gateway.formatDate(options.Created, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current
    }
  }
  return gateway.request(getApiV1SpecialtiesOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/specialties/1
 * 
 * @param {string} specialtyId 
 * @return {Promise<module:types.SpecialtyViewModel>} Success
 */
export function getApiV1SpecialtiesSpecialtyId(specialtyId: string): Promise<api.Response<api.SpecialtyViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      specialtyId
    }
  }
  return gateway.request(getApiV1SpecialtiesSpecialtyIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/specialties/1
 *     {
 *         "name": "Dilated cardiomyopathy",
 *         "description": "Dilated cardiomyopathy"
 *     }
 * 
 * @param {string} specialtyId 
 * @param {object} options Optional options
 * @param {module:types.UpdateSpecialtyCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1SpecialtiesSpecialtyId(specialtyId: string, options?: PutApiV1SpecialtiesSpecialtyIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      specialtyId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1SpecialtiesSpecialtyIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/specialties/1
 * 
 * @param {string} specialtyId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1SpecialtiesSpecialtyId(specialtyId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      specialtyId
    }
  }
  return gateway.request(deleteApiV1SpecialtiesSpecialtyIdOperation, parameters)
}

export interface PostApiV1SpecialtiesOptions {
  specialtyTypeId?: string
  body?: api.CreateSpecialtyCommand
}

export interface GetApiV1SpecialtiesOptions {
  Id?: string
  Name?: string
  Description?: string
  SpecialtyTypeId?: string
  Created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
}

export interface PutApiV1SpecialtiesSpecialtyIdOptions {
  body?: api.UpdateSpecialtyCommand
}

const postApiV1SpecialtiesOperation: api.OperationInfo = {
  path: '/api/v1/specialties',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1SpecialtiesOperation: api.OperationInfo = {
  path: '/api/v1/specialties',
  method: 'get'
}

const getApiV1SpecialtiesSpecialtyIdOperation: api.OperationInfo = {
  path: '/api/v1/specialties/{specialtyId}',
  method: 'get'
}

const putApiV1SpecialtiesSpecialtyIdOperation: api.OperationInfo = {
  path: '/api/v1/specialties/{specialtyId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1SpecialtiesSpecialtyIdOperation: api.OperationInfo = {
  path: '/api/v1/specialties/{specialtyId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
