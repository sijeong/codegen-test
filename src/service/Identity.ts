/// <reference path="types.ts"/>
/** @module Identity */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Smaple request:
 * 
 *     GET /api/v1/identity
 */
export function getApiV1Identity(): Promise<api.Response<any>> {
  return gateway.request(getApiV1IdentityOperation)
}

const getApiV1IdentityOperation: api.OperationInfo = {
  path: '/api/v1/identity',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
