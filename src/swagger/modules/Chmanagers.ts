import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Chmanagers_Type = {
  body?: Types.CreateCHManagerCommand
}
export type postApiV1Chmanagers_Response = string
/**
 * POST /api/v1/chmanagers
 *
 * Sample request:
 *
 *     POST /api/v1/chmanagers
 *     {
 *         "userName": "chmanager",
 *         "email": "chmanger@icloudhospital.com",
 *         "firstName": "cloud",
 *         "lastName": "manager",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T15:28:09.897Z",
 *         "locations": [
 *            {
 *            "locationType": "LivesIn",
 *            "latitude": 0,
 *            "longitude": 0,
 *            "country": "string",
 *            "state": "string",
 *            "county": "string",
 *            "city": "string",
 *            "zipCode": "string",
 *            "address": "string"
 *            }
 *         ]
 *      }
 **/
export const postApiV1Chmanagers = ApiCommon.requestMaker<
  postApiV1Chmanagers_Type,
  postApiV1Chmanagers_Response
>({
  id: "postApiV1Chmanagers",
  path: "/api/v1/chmanagers",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Chmanagers_Type = {
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
export type getApiV1Chmanagers_Response = Types.CHManagersViewModel
/**
 * GET /api/v1/chmanagers
 *
 * Sample request:
 *
 *     GET /api/v1/chmanagers
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "chmanager"
 *     }
 **/
export const getApiV1Chmanagers = ApiCommon.requestMaker<
  getApiV1Chmanagers_Type,
  getApiV1Chmanagers_Response
>({
  id: "getApiV1Chmanagers",
  path: "/api/v1/chmanagers",
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

export type getApiV1Chmanager_Type = {
  chManagerId: string
  managerId: string
}
export type getApiV1Chmanager_Response = Types.CHManagerViewModel
/**
 * GET /api/v1/chmanagers/{chManagerId}
 *
 * Sample request:
 *
 *     GET /api/v1/chmanagers/1
 **/
export const getApiV1Chmanager = ApiCommon.requestMaker<
  getApiV1Chmanager_Type,
  getApiV1Chmanager_Response
>({
  id: "getApiV1Chmanager",
  path: "/api/v1/chmanagers/{chManagerId}",
  verb: "GET",
  parameters: [
    { name: "chManagerId", required: true, in: "path" },
    { name: "managerId", required: true, in: "path" }
  ]
})

export type putApiV1Chmanager_Type = {
  body?: Types.UpdateCHManagerCommand
  chManagerId: string
}
export type putApiV1Chmanager_Response = boolean
/**
 * PUT /api/v1/chmanagers/{chManagerId}
 *
 * Sample request:
 *
 *     PUT /api/v1/chmanagers/1
 *     {
 *         "firstName": "cloud",
 *         "lastName": "manager",
 *         "photo": "string",
 *         "locations": [
 *         {
 *             "locationType": "LivesIn",
 *             "latitude": 0,
 *             "longitude": 0,
 *             "country": "string",
 *             "state": "string",
 *             "county": "string",
 *             "city": "string",
 *             "zipCode": "string",
 *             "address": "string"
 *             }
 *         ]
 *     }
 **/
export const putApiV1Chmanager = ApiCommon.requestMaker<
  putApiV1Chmanager_Type,
  putApiV1Chmanager_Response
>({
  id: "putApiV1Chmanager",
  path: "/api/v1/chmanagers/{chManagerId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "chManagerId", required: true, in: "path" }
  ]
})

export type deleteApiV1Chmanager_Type = {
  chManagerId: string
}
export type deleteApiV1Chmanager_Response = boolean
/**
 * DELETE /api/v1/chmanagers/{chManagerId}
 *
 * Smaple request:
 *
 *     DELETE /api/v1/chmanagers/1
 **/
export const deleteApiV1Chmanager = ApiCommon.requestMaker<
  deleteApiV1Chmanager_Type,
  deleteApiV1Chmanager_Response
>({
  id: "deleteApiV1Chmanager",
  path: "/api/v1/chmanagers/{chManagerId}",
  verb: "DELETE",
  parameters: [{ name: "chManagerId", required: true, in: "path" }]
})
