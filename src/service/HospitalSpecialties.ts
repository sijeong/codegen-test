/// <reference path="types.ts"/>
/** @module HospitalSpecialties */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals/1/specialties/1
 * 
 * @param {string} hospitalId 
 * @param {string} specialtyId 
 * @return {Promise<module:types.HospitalSpecialtyViewModel>} Success
 */
export function postApiV1HospitalsHospitalIdSpecialtiesSpecialtyId(hospitalId: string, specialtyId: string): Promise<api.Response<api.HospitalSpecialtyViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId
    }
  }
  return gateway.request(postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1/specialties/1
 * 
 * @param {string} hospitalId 
 * @param {string} specialtyId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyId(hospitalId: string, specialtyId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/hospitals/1/specialtysequence
 *     {
 *         "specialtyType": "Endocrinology",
 *         "hospitalSpecialtySequence": [14, 30, 5, 7]
 *     }
 * 
 * @param {string} hospitalId 
 * @param {string} SpecialtyTypeId 
 * @param {object} options Optional options
 * @param {module:types.UpdateHospitalSpecialtySequenceCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1HospitalsHospitalIdSpecialtysequence(hospitalId: string, SpecialtyTypeId: string, options?: PutApiV1HospitalsHospitalIdSpecialtysequenceOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      SpecialtyTypeId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1HospitalsHospitalIdSpecialtysequenceOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/specialties
 * 
 * @param {object} options Optional options
 * @param {string} [options.HospitalId] 
 * @param {string} [options.HospitalName] 
 * @param {string} [options.SpecialtyId] 
 * @param {string} [options.SpecialtyName] 
 * @param {string} [options.SpecialtyTypeId] 
 * @param {date} [options.Created] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @return {Promise<module:types.HospitalSpecialtiesViewModel>} Success
 */
export function getApiV1HospitalsSpecialties(options?: GetApiV1HospitalsSpecialtiesOptions): Promise<api.Response<api.HospitalSpecialtiesViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      HospitalId: options.HospitalId,
      HospitalName: options.HospitalName,
      SpecialtyId: options.SpecialtyId,
      SpecialtyName: options.SpecialtyName,
      SpecialtyTypeId: options.SpecialtyTypeId,
      Created: gateway.formatDate(options.Created, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current
    }
  }
  return gateway.request(getApiV1HospitalsSpecialtiesOperation, parameters)
}

export interface PutApiV1HospitalsHospitalIdSpecialtysequenceOptions {
  body?: api.UpdateHospitalSpecialtySequenceCommand
}

export interface GetApiV1HospitalsSpecialtiesOptions {
  HospitalId?: string
  HospitalName?: string
  SpecialtyId?: string
  SpecialtyName?: string
  SpecialtyTypeId?: string
  Created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
}

const postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}',
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const putApiV1HospitalsHospitalIdSpecialtysequenceOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialtysequence',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsSpecialtiesOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/specialties',
  method: 'get'
}
