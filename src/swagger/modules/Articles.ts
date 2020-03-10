import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1HospitalArticles_Type = {
  body?: Types.CreateArticleCommand
  hospitalId: string
}
export type postApiV1HospitalArticles_Response = string
/**
 * POST /api/v1/hospitals/{hospitalId}/articles
 *
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
 **/
export const postApiV1HospitalArticles = ApiCommon.requestMaker<
  postApiV1HospitalArticles_Type,
  postApiV1HospitalArticles_Response
>({
  id: "postApiV1HospitalArticles",
  path: "/api/v1/hospitals/{hospitalId}/articles",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalArticle_Type = {
  articleId: string
  hospitalId: string
}
export type getApiV1HospitalArticle_Response = Types.ArticleViewModel
/**
 * GET /api/v1/hospitals/{hospitalId}/articles/{articleId}
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/1/articles/1
 **/
export const getApiV1HospitalArticle = ApiCommon.requestMaker<
  getApiV1HospitalArticle_Type,
  getApiV1HospitalArticle_Response
>({
  id: "getApiV1HospitalArticle",
  path: "/api/v1/hospitals/{hospitalId}/articles/{articleId}",
  verb: "GET",
  parameters: [
    { name: "articleId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type putApiV1HospitalArticle_Type = {
  articleId: string
  body?: Types.UpdateArticleCommand
  hospitalId: string
}
export type putApiV1HospitalArticle_Response = boolean
/**
 * PUT /api/v1/hospitals/{hospitalId}/articles/{articleId}
 *
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
 **/
export const putApiV1HospitalArticle = ApiCommon.requestMaker<
  putApiV1HospitalArticle_Type,
  putApiV1HospitalArticle_Response
>({
  id: "putApiV1HospitalArticle",
  path: "/api/v1/hospitals/{hospitalId}/articles/{articleId}",
  verb: "PUT",
  parameters: [
    { name: "articleId", required: true, in: "path" },
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type deleteApiV1HospitalArticle_Type = {
  articleId: string
  hospitalId: string
}
export type deleteApiV1HospitalArticle_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}/articles/{articleId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1/articles/1
 **/
export const deleteApiV1HospitalArticle = ApiCommon.requestMaker<
  deleteApiV1HospitalArticle_Type,
  deleteApiV1HospitalArticle_Response
>({
  id: "deleteApiV1HospitalArticle",
  path: "/api/v1/hospitals/{hospitalId}/articles/{articleId}",
  verb: "DELETE",
  parameters: [
    { name: "articleId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalsArticles_Type = {
  Current?: boolean
  hospitalId?: string
  lastRetrieved?: string
  limit?: number
  page?: number
  searchString?: string
}
export type getApiV1HospitalsArticles_Response = Types.ArticlesViewModel
/**
 * GET /api/v1/hospitals/articles
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/1/articles
 **/
export const getApiV1HospitalsArticles = ApiCommon.requestMaker<
  getApiV1HospitalsArticles_Type,
  getApiV1HospitalsArticles_Response
>({
  id: "getApiV1HospitalsArticles",
  path: "/api/v1/hospitals/articles",
  verb: "GET",
  parameters: [
    { name: "Current", in: "query" },
    { name: "hospitalId", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "page", in: "query" },
    { name: "searchString", in: "query" }
  ]
})
