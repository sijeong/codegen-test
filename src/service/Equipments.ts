/// <reference path="types.ts"/>
/** @module Equipments */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals/1/equipments
 *     {
 *         "name": "Afroasia ltd",
 *         "description": "Medical equipment",
 *         "medias": [
 *           {
 *             "mediaType": 0,
 *             "url": "imageurl",
 *             "description": "string",        
 *             "order": 0
 *           }
 *         ]
 *     }
 * 
 * @param {string} hospitalId 
 * @param {object} options Optional options
 * @param {module:types.CreateEquipmentCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1HospitalsHospitalIdEquipments(hospitalId: string, options?: PostApiV1HospitalsHospitalIdEquipmentsOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1HospitalsHospitalIdEquipmentsOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/1/equipments/1
 * 
 * @param {number} hospitalId 
 * @param {string} equipmentId 
 * @return {Promise<module:types.EquipmentViewModel>} Success
 */
export function getApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId: number, equipmentId: string): Promise<api.Response<api.EquipmentViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      equipmentId
    }
  }
  return gateway.request(getApiV1HospitalsHospitalIdEquipmentsEquipmentIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/hospitals/1/equipments/1
 *     {
 *         "description": "Upgraded medical equipment"
 *     }
 * 
 * @param {string} hospitalId 
 * @param {string} equipmentId 
 * @param {object} options Optional options
 * @param {module:types.UpdateEquipmentCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId: string, equipmentId: string, options?: PutApiV1HospitalsHospitalIdEquipmentsEquipmentIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      equipmentId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1HospitalsHospitalIdEquipmentsEquipmentIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1/equipments/1
 * 
 * @param {string} hospitalId 
 * @param {string} equipmentId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalIdEquipmentsEquipmentId(hospitalId: string, equipmentId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      equipmentId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdEquipmentsEquipmentIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/1/equipments
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "Medical"
 *     }
 * 
 * @param {object} options Optional options
 * @param {string} [options.Id] 
 * @param {string} [options.Name] 
 * @param {string} [options.Description] 
 * @param {string} [options.HospitalId] 
 * @param {string} [options.HospitalName] 
 * @param {date} [options.Created] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @return {Promise<module:types.EquipmentsViewModel>} Success
 */
export function getApiV1HospitalsEquipments(options?: GetApiV1HospitalsEquipmentsOptions): Promise<api.Response<api.EquipmentsViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      Id: options.Id,
      Name: options.Name,
      Description: options.Description,
      HospitalId: options.HospitalId,
      HospitalName: options.HospitalName,
      Created: gateway.formatDate(options.Created, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current
    }
  }
  return gateway.request(getApiV1HospitalsEquipmentsOperation, parameters)
}

export interface PostApiV1HospitalsHospitalIdEquipmentsOptions {
  body?: api.CreateEquipmentCommand
}

export interface PutApiV1HospitalsHospitalIdEquipmentsEquipmentIdOptions {
  body?: api.UpdateEquipmentCommand
}

export interface GetApiV1HospitalsEquipmentsOptions {
  Id?: string
  Name?: string
  Description?: string
  HospitalId?: string
  HospitalName?: string
  Created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
}

const postApiV1HospitalsHospitalIdEquipmentsOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/equipments',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsHospitalIdEquipmentsEquipmentIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}',
  method: 'get'
}

const putApiV1HospitalsHospitalIdEquipmentsEquipmentIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdEquipmentsEquipmentIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsEquipmentsOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/equipments',
  method: 'get'
}
