/// <reference path="types.ts"/>
/** @module Movies */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 */
export function postApiV1Movies(): Promise<api.Response<any>> {
  return gateway.request(postApiV1MoviesOperation)
}

const postApiV1MoviesOperation: api.OperationInfo = {
  path: '/api/v1/movies',
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
