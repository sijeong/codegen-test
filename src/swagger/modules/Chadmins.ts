import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Chadmins_Type = {
  body?: Types.CreateCHAdminCommand
}
export type postApiV1Chadmins_Response = string
/**
 * POST /api/v1/chadmins
 *
 * Sample request:
 *
 *     POST /api/v1/chadmins
 *     {
 *         "firstName": "Cloud",
 *         "lastName": "Hospital",
 *         "photo": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "photoThumbnail": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T09:09:19.082Z",
 *         "locations": [
 *             {
 *                 "locationType": "LivesIn",
 *                 "latitude": 0,
 *                 "longitude": 0,
 *                 "country": "string",
 *                 "state": "string",
 *                 "county": "string",
 *                 "city": "string",
 *                 "zipCode": "string",
 *                 "address": "string"
 *             }
 *         ]
 *     }
 **/
export const postApiV1Chadmins = ApiCommon.requestMaker<
  postApiV1Chadmins_Type,
  postApiV1Chadmins_Response
>({
  id: "postApiV1Chadmins",
  path: "/api/v1/chadmins",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Chadmins_Type = {
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
export type getApiV1Chadmins_Response = Types.CHAdminsViewModel
/**
 * GET /api/v1/chadmins
 *
 * Sample request:
 *
 *     GET /api/v1/chadmin
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "admin"
 *     }
 **/
export const getApiV1Chadmins = ApiCommon.requestMaker<
  getApiV1Chadmins_Type,
  getApiV1Chadmins_Response
>({
  id: "getApiV1Chadmins",
  path: "/api/v1/chadmins",
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

export type getApiV1Chadmin_Type = {
  chAdminId: string
}
export type getApiV1Chadmin_Response = Types.CHAdminViewModel
/**
 * GET /api/v1/chadmins/{chAdminId}
 *
 * Sample request:
 *
 *     GET /api/v1/chadmins/1
 **/
export const getApiV1Chadmin = ApiCommon.requestMaker<
  getApiV1Chadmin_Type,
  getApiV1Chadmin_Response
>({
  id: "getApiV1Chadmin",
  path: "/api/v1/chadmins/{chAdminId}",
  verb: "GET",
  parameters: [{ name: "chAdminId", required: true, in: "path" }]
})

export type putApiV1Chadmin_Type = {
  body?: Types.UpdateCHAdminCommand
  chAdminId: string
}
export type putApiV1Chadmin_Response = boolean
/**
 * PUT /api/v1/chadmins/{chAdminId}
 *
 * Sample request:
 *
 *     PUT /api/v1/chadmins/1
 *     {
 *         "email": "adminupdate@icloudhospital.com",
 *         "firstName": "Cloud",
 *         "lastName": "Hospital",
 *         "photo": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "photoThumbnail": "https://cloudhospitalblob.blob.core.windows.net/assets/Cloud_Hospital_Logo_blue.png",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T09:09:19.082Z",
 *         "locations": [
 *             {
 *                 "locationType": "LivesIn",
 *                 "latitude": 0,
 *                 "longitude": 0,
 *                 "country": "string",
 *                 "state": "string",
 *                 "county": "string",
 *                 "city": "string",
 *                 "zipCode": "string",
 *                 "address": "string"
 *             }
 *         ]
 *     }
 **/
export const putApiV1Chadmin = ApiCommon.requestMaker<
  putApiV1Chadmin_Type,
  putApiV1Chadmin_Response
>({
  id: "putApiV1Chadmin",
  path: "/api/v1/chadmins/{chAdminId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "chAdminId", required: true, in: "path" }
  ]
})

export type deleteApiV1Chadmin_Type = {
  chAdminId: string
}
export type deleteApiV1Chadmin_Response = boolean
/**
 * DELETE /api/v1/chadmins/{chAdminId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/chadmins/1
 **/
export const deleteApiV1Chadmin = ApiCommon.requestMaker<
  deleteApiV1Chadmin_Type,
  deleteApiV1Chadmin_Response
>({
  id: "deleteApiV1Chadmin",
  path: "/api/v1/chadmins/{chAdminId}",
  verb: "DELETE",
  parameters: [{ name: "chAdminId", required: true, in: "path" }]
})
