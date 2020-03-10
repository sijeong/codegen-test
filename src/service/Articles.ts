/// <reference path="types.ts"/>
/** @module Articles */
// Auto-generated, edits will be overwritten
import * as gateway from './gateway'

/**
 * Sample request:
 * 
 *     POST /api/v1/hospitals/1/articles
 *     {
 *         "title": "Samsung Hospital Article",
 *         "description": "This is an article.",
 *         "body": "article body here",
 *         "status": "Draft",
 *         "hospitalId": 1,
 *         "tags": [
 *           {
 *             "value": "string",
 *             "order": 0
 *             }
 *         ],
 *         "medias": [
 *           {
 *             "mediaType": "Photo",
 *             "url": "string",
 *             "thumbnailUrl": "string",
 *             "description": "string",
 *             "order": 0
 *           }
 *         ]
 *     }
 * 
 * @param {string} hospitalId 
 * @param {object} options Optional options
 * @param {module:types.CreateArticleCommand} [options.body] 
 * @return {Promise<string>} Success
 */
export function postApiV1HospitalsHospitalIdArticles(hospitalId: string, options?: PostApiV1HospitalsHospitalIdArticlesOptions): Promise<api.Response<string>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(postApiV1HospitalsHospitalIdArticlesOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/1/articles/1
 * 
 * @param {string} hospitalId 
 * @param {string} articleId 
 * @return {Promise<module:types.ArticleViewModel>} Success
 */
export function getApiV1HospitalsHospitalIdArticlesArticleId(hospitalId: string, articleId: string): Promise<api.Response<api.ArticleViewModel>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      articleId
    }
  }
  return gateway.request(getApiV1HospitalsHospitalIdArticlesArticleIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     PUT /api/v1/hospitals/1/articles/1
 *     {
 *         "title": "Samsung Hospital Article",
 *         "description": "This is an article.",
 *         "body": "updated article body here",
 *         "status": "Draft",
 *         "hospitalId": 1,
 *         "tags": [
 *           {
 *             "value": "articletag1",
 *             "order": 0
 *           },
 *           {
 *             "value": "articletag2",
 *             "order": 0
 *           }
 *         ],
 *         "medias": [
 *           {
 *             "mediaType": "Photo",
 *             "url": "string",
 *             "thumbnailUrl": "string",
 *             "description": "string",
 *             "order": 0
 *           }
 *         ]
 *     }
 * 
 * @param {string} hospitalId 
 * @param {string} articleId 
 * @param {object} options Optional options
 * @param {module:types.UpdateArticleCommand} [options.body] 
 * @return {Promise<boolean>} Success
 */
export function putApiV1HospitalsHospitalIdArticlesArticleId(hospitalId: string, articleId: string, options?: PutApiV1HospitalsHospitalIdArticlesArticleIdOptions): Promise<api.Response<boolean>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      articleId
    },
    body: {
      body: options.body
    }
  }
  return gateway.request(putApiV1HospitalsHospitalIdArticlesArticleIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     DELETE /api/v1/hospitals/1/articles/1
 * 
 * @param {string} hospitalId 
 * @param {string} articleId 
 * @return {Promise<boolean>} Success
 */
export function deleteApiV1HospitalsHospitalIdArticlesArticleId(hospitalId: string, articleId: string): Promise<api.Response<boolean>> {
  const parameters: api.OperationParamGroups = {
    path: {
      hospitalId,
      articleId
    }
  }
  return gateway.request(deleteApiV1HospitalsHospitalIdArticlesArticleIdOperation, parameters)
}

/**
 * Sample request:
 * 
 *     GET /api/v1/hospitals/1/articles
 * 
 * @param {object} options Optional options
 * @param {number} [options.page] 
 * @param {number} [options.limit] 
 * @param {date} [options.lastRetrieved] 
 * @param {boolean} [options.Current] 
 * @param {string} [options.searchString] 
 * @param {string} [options.hospitalId] 
 * @return {Promise<module:types.ArticlesViewModel>} Success
 */
export function getApiV1HospitalsArticles(options?: GetApiV1HospitalsArticlesOptions): Promise<api.Response<api.ArticlesViewModel>> {
  if (!options) options = {}
  const parameters: api.OperationParamGroups = {
    query: {
      page: options.page,
      limit: options.limit,
      lastRetrieved: gateway.formatDate(options.lastRetrieved, 'date-time'),
      Current: options.Current,
      searchString: options.searchString,
      hospitalId: options.hospitalId
    }
  }
  return gateway.request(getApiV1HospitalsArticlesOperation, parameters)
}

export interface PostApiV1HospitalsHospitalIdArticlesOptions {
  body?: api.CreateArticleCommand
}

export interface PutApiV1HospitalsHospitalIdArticlesArticleIdOptions {
  body?: api.UpdateArticleCommand
}

export interface GetApiV1HospitalsArticlesOptions {
  page?: number
  limit?: number
  lastRetrieved?: Date
  Current?: boolean
  searchString?: string
  hospitalId?: string
}

const postApiV1HospitalsHospitalIdArticlesOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/articles',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'post',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsHospitalIdArticlesArticleIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/articles/{articleId}',
  method: 'get'
}

const putApiV1HospitalsHospitalIdArticlesArticleIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/articles/{articleId}',
  contentTypes: ['application/json','text/json','application/*+json'],
  method: 'put',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const deleteApiV1HospitalsHospitalIdArticlesArticleIdOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/{hospitalId}/articles/{articleId}',
  method: 'delete',
  security: [
    {
      id: 'oauth2',
      scopes: ['CloudHospital_api', 'IdentityServerApi']
    }
  ]
}

const getApiV1HospitalsArticlesOperation: api.OperationInfo = {
  path: '/api/v1/hospitals/articles',
  method: 'get'
}
