/// <reference path="types.ts"/>
/** @module Affiliations */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals/1/doctors/1
 * 
 * @param {string} hospitalId 
 * @param {string} doctorId 
 * @return {Promise<module:types.DoctorAffiliationViewModel>} Success
 */
export function postApiV1HospitalsHospitalIdDoctorsDoctorId(hospitalId: string, doctorId: string): Promise<api.Response<api.DoctorAffiliationViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      doctorId
    }
  }
  return gateway.request(postApiV1HospitalsHospitalIdDoctorsDoctorIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1/doctors/1
 * 
 * @param {string} hospitalId 
 * @param {string} doctorId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalIdDoctorsDoctorId(hospitalId: string, doctorId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      doctorId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdDoctorsDoctorIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals/1/managers/1
 * 
 * @param {string} hospitalId 
 * @param {string} managerId 
 * @return {Promise<module:types.ManagerAffiliationViewModel>} Success
 */
export function postApiV1HospitalsHospitalIdManagersManagerId(hospitalId: string, managerId: string): Promise<api.Response<api.ManagerAffiliationViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      managerId
    }
  }
  return gateway.request(postApiV1HospitalsHospitalIdManagersManagerIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1/managers/1
 * 
 * @param {string} hospitalId 
 * @param {string} managerId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalIdManagersManagerId(hospitalId: string, managerId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      managerId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdManagersManagerIdOperation, parameters)
}

const postApiV1HospitalsHospitalIdDoctorsDoctorIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/doctors/{doctorId}',
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdDoctorsDoctorIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/doctors/{doctorId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const postApiV1HospitalsHospitalIdManagersManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/managers/{managerId}',
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdManagersManagerIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/managers/{managerId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
