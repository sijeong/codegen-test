import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Partners_Type = {
  body?: Types.CreatePartnerCommand
}
export type postApiV1Partners_Response = string
/**
 * POST /api/v1/partners
 *
 * Sample request:
 *
 *     POST /api/v1/partners
 *     {
 *         "userName": "string",
 *         "email": "string",
 *         "firstName": "string",
 *         "lastName": "string",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T18:04:18.025Z",
 *         "locations": [
 *           {
 *             "locationType": "LivesIn",
 *             "latitude": 0,
 *             "longitude": 0,
 *             "country": "string",
 *             "state": "string",
 *             "county": "string",
 *             "city": "string",
 *             "zipCode": "string",
 *             "address": "string"
 *           }
 *         ]
 *     }
 **/
export const postApiV1Partners = ApiCommon.requestMaker<
  postApiV1Partners_Type,
  postApiV1Partners_Response
>({
  id: "postApiV1Partners",
  path: "/api/v1/partners",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Partners_Type = {
  Created?: string
  Current?: boolean
  DateOfBirth?: string
  Email?: string
  Fullname?: string
  Gender?: any
  Id?: string
  lastRetrieved?: string
  limit?: number
  page?: number
}
export type getApiV1Partners_Response = Types.PartnersViewModel
/**
 * GET /api/v1/partners
 *
 * Sample request:
 *
 *     GET /api/v1/partners
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "patner"
 *     }
 **/
export const getApiV1Partners = ApiCommon.requestMaker<
  getApiV1Partners_Type,
  getApiV1Partners_Response
>({
  id: "getApiV1Partners",
  path: "/api/v1/partners",
  verb: "GET",
  parameters: [
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "DateOfBirth", in: "query" },
    { name: "Email", in: "query" },
    { name: "Fullname", in: "query" },
    { name: "Gender", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "page", in: "query" }
  ]
})

export type getApiV1Partner_Type = {
  partnerId: string
}
export type getApiV1Partner_Response = Types.PartnerViewModel
/**
 * GET /api/v1/partners/{partnerId}
 *
 * Sample request:
 *
 *     GET /api/v1/patners/1
 **/
export const getApiV1Partner = ApiCommon.requestMaker<
  getApiV1Partner_Type,
  getApiV1Partner_Response
>({
  id: "getApiV1Partner",
  path: "/api/v1/partners/{partnerId}",
  verb: "GET",
  parameters: [{ name: "partnerId", required: true, in: "path" }]
})

export type putApiV1Partner_Type = {
  body?: Types.UpdatePartnerCommand
  partnerId: string
}
export type putApiV1Partner_Response = boolean
/**
 * PUT /api/v1/partners/{partnerId}
 *
 * Sample request:
 *
 *     PUT /api/v1/patners/1
 *     {
 *         firstName": "string",
 *         "lastName": "string",
 *         "photo": "string",
 *         "locations": [
 *           {
 *             "locationType": "LivesIn",
 *             "latitude": 0,
 *             "longitude": 0,
 *             "country": "string",
 *             "state": "string",
 *             "county": "string",
 *             "city": "string",
 *             "zipCode": "string",
 *             "address": "string"
 *           }
 *         ]
 *     }
 **/
export const putApiV1Partner = ApiCommon.requestMaker<
  putApiV1Partner_Type,
  putApiV1Partner_Response
>({
  id: "putApiV1Partner",
  path: "/api/v1/partners/{partnerId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "partnerId", required: true, in: "path" }
  ]
})

export type deleteApiV1Partner_Type = {
  partnerId: string
}
export type deleteApiV1Partner_Response = boolean
/**
 * DELETE /api/v1/partners/{partnerId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/partners/1
 **/
export const deleteApiV1Partner = ApiCommon.requestMaker<
  deleteApiV1Partner_Type,
  deleteApiV1Partner_Response
>({
  id: "deleteApiV1Partner",
  path: "/api/v1/partners/{partnerId}",
  verb: "DELETE",
  parameters: [{ name: "partnerId", required: true, in: "path" }]
})
