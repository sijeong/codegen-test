import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Managers_Type = {
  body?: Types.CreateManagerCommand
}
export type postApiV1Managers_Response = string
/**
 * POST /api/v1/managers
 *
 * Sample request:
 *
 *     POST /api/v1/managers
 *     {
 *         "userName": "manager",
 *         "email": "manger@icloudhospital.com",
 *         "hospitalId": 1,
 *         "firstName": "cloud",
 *         "lastName": "manager",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T15:28:09.897Z",
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
export const postApiV1Managers = ApiCommon.requestMaker<
  postApiV1Managers_Type,
  postApiV1Managers_Response
>({
  id: "postApiV1Managers",
  path: "/api/v1/managers",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Managers_Type = {
  Created?: string
  Current?: boolean
  DateOfBirth?: string
  Email?: string
  Fullname?: string
  Gender?: any
  hospitalId?: string
  Id?: string
  lastRetrieved?: string
  limit?: number
  page?: number
}
export type getApiV1Managers_Response = Types.ManagersViewModel
/**
 * GET /api/v1/managers
 *
 * Sample request:
 *
 *     GET /api/v1/managers
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "manager"
 *     }
 **/
export const getApiV1Managers = ApiCommon.requestMaker<
  getApiV1Managers_Type,
  getApiV1Managers_Response
>({
  id: "getApiV1Managers",
  path: "/api/v1/managers",
  verb: "GET",
  parameters: [
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "DateOfBirth", in: "query" },
    { name: "Email", in: "query" },
    { name: "Fullname", in: "query" },
    { name: "Gender", in: "query" },
    { name: "hospitalId", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "page", in: "query" }
  ]
})

export type getApiV1Manager_Type = {
  managerId: string
}
export type getApiV1Manager_Response = Types.ManagerViewModel
/**
 * GET /api/v1/managers/{managerId}
 *
 * Sample request:
 *
 *     GET /api/v1/managers/1
 **/
export const getApiV1Manager = ApiCommon.requestMaker<
  getApiV1Manager_Type,
  getApiV1Manager_Response
>({
  id: "getApiV1Manager",
  path: "/api/v1/managers/{managerId}",
  verb: "GET",
  parameters: [{ name: "managerId", required: true, in: "path" }]
})

export type putApiV1Manager_Type = {
  body?: Types.UpdateManagerCommand
  managerId: string
}
export type putApiV1Manager_Response = boolean
/**
 * PUT /api/v1/managers/{managerId}
 *
 * Sample request:
 *
 *     PUT /api/v1/managers/1
 *     {
 *         "firstName": "string",
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
export const putApiV1Manager = ApiCommon.requestMaker<
  putApiV1Manager_Type,
  putApiV1Manager_Response
>({
  id: "putApiV1Manager",
  path: "/api/v1/managers/{managerId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "managerId", required: true, in: "path" }
  ]
})

export type deleteApiV1Manager_Type = {
  managerId: string
}
export type deleteApiV1Manager_Response = boolean
/**
 * DELETE /api/v1/managers/{managerId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/managers/1
 **/
export const deleteApiV1Manager = ApiCommon.requestMaker<
  deleteApiV1Manager_Type,
  deleteApiV1Manager_Response
>({
  id: "deleteApiV1Manager",
  path: "/api/v1/managers/{managerId}",
  verb: "DELETE",
  parameters: [{ name: "managerId", required: true, in: "path" }]
})
