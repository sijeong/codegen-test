/// <reference path="types.ts"/>
/** @module Services */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals/1/specialties/1/services
 *     {
 *         "name": "Heart check up",
 *         "description": "Asan Hospital (Asan Medical Center) is the largest multidisciplinary medical center in South Korea, which can serve 2,700 patients at once.The key specialties in the hospital are organ transplant, oncology, cardiology, and cardiac surgery.Almost half of all heart transplants in South Korea are carried out (45%) at Asan.The success of organ transplants ranges from 90%. Every day, 11,800 outpatients and 2,550 inpatients are treated in Asan Hospital. Medical tourists from the USA, China, the UAE, Russia, Kazakhstan, and Mongolia choose Asan Hospital.",
 *         "minPrice": 2235,
 *         "maxPrice": 2566,
 *         "priceReuqest": false,
 *         "procedure": "Treatment"
 *     }
 * 
 * @param {string} hospitalId 
 * @param {string} specialtyId 
 * @param {object} options Optional options
 * @param {module:types.CreateServiceCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServices(hospitalId: string, specialtyId: string, options?: PostApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/1/specialties/1/services/1
 * 
 * @param {number} hospitalId 
 * @param {number} specialtyId 
 * @param {string} serviceId 
 * @return {Promise<module:types.ServiceViewModel>} Success
 */
export function getApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId: number, specialtyId: number, serviceId: string): Promise<api.Response<api.ServiceViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId,
      serviceId
    }
  }
  return gateway.request(getApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/hospitals/1/specialties/1/services/1
 *     {
 *         "name": "Extended analysis of blood",
 *         "description": "Extended analysis of blood description.",
 *         "minPrice": 1000,
 *         "maxPrice": 2600,
 *         "priceReuqest": false
 *     }
 * 
 * @param {string} hospitalId 
 * @param {string} specialtyId 
 * @param {string} serviceId 
 * @param {object} options Optional options
 * @param {module:types.UpdateServiceCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId: string, specialtyId: string, serviceId: string, options?: PutApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId,
      serviceId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1/specialties/1/services/1
 * 
 * @param {string} hospitalId 
 * @param {string} specialtyId 
 * @param {string} serviceId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceId(hospitalId: string, specialtyId: string, serviceId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId,
      serviceId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOperation, parameters)
}

/**
 * Smaple request:
 * 
 *     PUT /api/v1/hospitals/1/specialties/1/servicesquence
 *     {
 *         "serviceSequence": [1, 3, 5]
 *     }
 * 
 * @param {string} hospitalId 
 * @param {string} specialtyId 
 * @param {object} options Optional options
 * @param {module:types.UpdateServiceSequenceCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquence(hospitalId: string, specialtyId: string, options?: PutApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquenceOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      specialtyId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquenceOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/services
 * 
 * @param {object} options Optional options
 * @param {string} [options.Id] 
 * @param {string} [options.Name] 
 * @param {string} [options.Description] 
 * @param {string} [options.HospitalId] 
 * @param {string} [options.SpecialtyId] 
 * @param {string} [options.SpecialtyTypeId] 
 * @param {object} [options.Procedure] 
 * @param {date} [options.Created] 
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @return {Promise<module:types.ServicesViewModel>} Success
 */
export function getApiV1HospitalsServices(options?: GetApiV1HospitalsServicesOptions): Promise<api.Response<api.ServicesViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      Id: options.Id,
      Name: options.Name,
      Description: options.Description,
      HospitalId: options.HospitalId,
      SpecialtyId: options.SpecialtyId,
      SpecialtyTypeId: options.SpecialtyTypeId,
      Procedure: options.Procedure,
      Created: gateway.formatDate(options.Created, 'date-time'),
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current
    }
  }
  return gateway.request(getApiV1HospitalsServicesOperation, parameters)
}

export interface PostApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesOptions {
  body?: api.CreateServiceCommand
}

export interface PutApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOptions {
  body?: api.UpdateServiceCommand
}

export interface PutApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquenceOptions {
  body?: api.UpdateServiceSequenceCommand
}

export interface GetApiV1HospitalsServicesOptions {
  Id?: string
  Name?: string
  Description?: string
  HospitalId?: string
  SpecialtyId?: string
  SpecialtyTypeId?: string
  Procedure?: any
  Created?: Date
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
}

const postApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}',
  method: 'get'
}

const putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesServiceIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const putApiV1HospitalsHospitalIdSpecialtiesSpecialtyIdServicesquenceOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/servicesquence',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsServicesOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/services',
  method: 'get'
}
