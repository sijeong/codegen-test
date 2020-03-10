import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Hospitals_Type = {
  body?: Types.CreateHospitalCommand
}
export type postApiV1Hospitals_Response = string
/**
 * POST /api/v1/hospitals
 *
 * Sample request:
 *
 *     POST /api/v1/hospitals
 *     {
 *         "name": "Samsung Medical Center",
 *         "description": "Comprehensive Cancer Center in Seoul, South Korea is nationally ranked in 1 adult specialty.",
 *         "logo": "http://www.samsunghospital.com/home/main/index.do",
 *         "overview": "Overview of Samsung Medical Center",
 *         "bedsCount": 1436,
 *         "operationRoomsCount": 34,
 *         "icuBedsCount": 12,
 *         "departmentsCount": 20,
 *         "medicalStaffCount": 600,
 *         "countryId": 1,
 *         "awards": [
 *           {
 *             "name": "Award1",
 *             "image": "string",
 *             "date": "2020-02-05T09:29:19.240Z"
 *           },
 *           {
 *             "name": "Award2",
 *             "image": "string",
 *             "date": "2020-02-05T09:29:19.240Z"
 *           }
 *         ],
 *         "medias": [
 *           {
 *             "mediaType": "Photo",
 *             "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SamsungMedicalCenter.jpg",
 *             "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SamsungMedicalCenter.jpg",
 *             "description": "string",
 *             "order": 0
 *           },
 *           {
 *             "mediaType": "Video",
 *             "url": "string",
 *             "description": "string",
 *             "order": 1
 *           }
 *         ],
 *         "location": {
 *           "latitude": 37.4881568,
 *           "longitude": 127.0855952,
 *           "country": "Korea",
 *           "state": "string",
 *           "county": "Gangnamgu",
 *           "city": "Seoul",
 *           "zipCode": "12345",
 *           "address": "Il-won ro 81"
 *         }
 *     }
 **/
export const postApiV1Hospitals = ApiCommon.requestMaker<
  postApiV1Hospitals_Type,
  postApiV1Hospitals_Response
>({
  id: "postApiV1Hospitals",
  path: "/api/v1/hospitals",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Hospitals_Type = {
  CountryId?: string
  Created?: string
  Current?: boolean
  Description?: string
  Id?: string
  lastRetrieved?: string
  limit?: number
  Name?: string
  page?: number
}
export type getApiV1Hospitals_Response = Types.HospitalsViewModel
/**
 * GET /api/v1/hospitals
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "Samsung"
 *     }
 **/
export const getApiV1Hospitals = ApiCommon.requestMaker<
  getApiV1Hospitals_Type,
  getApiV1Hospitals_Response
>({
  id: "getApiV1Hospitals",
  path: "/api/v1/hospitals",
  verb: "GET",
  parameters: [
    { name: "CountryId", in: "query" },
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "Description", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "Name", in: "query" },
    { name: "page", in: "query" }
  ]
})

export type getApiV1Hospital_Type = {
  hospitalId: string
}
export type getApiV1Hospital_Response = Types.HospitalViewModel
/**
 * GET /api/v1/hospitals/{hospitalId}
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/1
 **/
export const getApiV1Hospital = ApiCommon.requestMaker<
  getApiV1Hospital_Type,
  getApiV1Hospital_Response
>({
  id: "getApiV1Hospital",
  path: "/api/v1/hospitals/{hospitalId}",
  verb: "GET",
  parameters: [{ name: "hospitalId", required: true, in: "path" }]
})

export type putApiV1Hospital_Type = {
  body?: Types.UpdateHospitalCommand
  hospitalId: string
}
export type putApiV1Hospital_Response = boolean
/**
 * PUT /api/v1/hospitals/{hospitalId}
 *
 * Sameple request:
 *
 *     PUT /api/v1/hospitals
 *     {
 *         "overview": "Overview of Samsung Medical Center",
 *         "bedsCount": 2436,
 *         "operationRoomsCount": 44,
 *         "icuBedsCount": 122,
 *         "departmentsCount": 200,
 *         "medicalStaffCount": 1200,
 *     }
 **/
export const putApiV1Hospital = ApiCommon.requestMaker<
  putApiV1Hospital_Type,
  putApiV1Hospital_Response
>({
  id: "putApiV1Hospital",
  path: "/api/v1/hospitals/{hospitalId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type deleteApiV1Hospital_Type = {
  hospitalId: string
}
export type deleteApiV1Hospital_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1
 **/
export const deleteApiV1Hospital = ApiCommon.requestMaker<
  deleteApiV1Hospital_Type,
  deleteApiV1Hospital_Response
>({
  id: "deleteApiV1Hospital",
  path: "/api/v1/hospitals/{hospitalId}",
  verb: "DELETE",
  parameters: [{ name: "hospitalId", required: true, in: "path" }]
})
