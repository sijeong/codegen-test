/// <reference path="types.ts"/>
/** @module Profiles */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     GET /api/v1/profiles
 */
export function getApiV1Profiles(): Promise<api.Response<api.UserViewModel>> {
  return gateway.request(getApiV1ProfilesOperation)
}

/**
 * Sample request:
 * 
 *     POST /api/v1/profiles/changeEmail
 *     {
 *         "email": "user@example.com"
 *     }
 * 
 * @param {object} options Optional options
 * @param {module:types.ChangeEmailCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function postApiV1ProfilesChangeemail(options?: PostApiV1ProfilesChangeemailOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1ProfilesChangeemailOperation, parameters)
}

export interface PostApiV1ProfilesChangeemailOptions {
  body?: api.ChangeEmailCommand
}

const getApiV1ProfilesOperation: api.OperationInfo = {
  path: '/api/v1/profiles',
  method: 'get',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const postApiV1ProfilesChangeemailOperation: api.OperationInfo = {
  path: '/api/v1/profiles/changeemail',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}
