/// <reference path="types.ts"/>
/** @module Images */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 */
export function postApiV1Images(): Promise<api.Response<any>> {
  return gateway.request(postApiV1ImagesOperation)
}

const postApiV1ImagesOperation: api.OperationInfo = {
  path: '/api/v1/images',
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
