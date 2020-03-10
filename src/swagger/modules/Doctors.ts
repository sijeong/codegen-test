import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Doctors_Type = {
  body?: Types.CreateDoctorCommand
}
export type postApiV1Doctors_Response = string
/**
 * POST /api/v1/doctors
 *
 * Sample request:
 *
 *     POST /api/v1/doctors
 *     {
 *         "userName": "cloudDoctor",
 *         "email": "doctor@icloudhospital.com",
 *         "hospitalId": 1,
 *         "firstName": "cloud",
 *         "lastName": "doctor",
 *         "photo": "string",
 *         "photoThumbnail": "string",
 *         "gender": "NotSpecified",
 *         "dateOfBirth": "2020-02-22T17:57:32.048Z",
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
export const postApiV1Doctors = ApiCommon.requestMaker<
  postApiV1Doctors_Type,
  postApiV1Doctors_Response
>({
  id: "postApiV1Doctors",
  path: "/api/v1/doctors",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Doctors_Type = {
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
export type getApiV1Doctors_Response = Types.DoctorsViewModel
/**
 * GET /api/v1/doctors
 *
 * Sample request:
 *
 *     GET /api/v1/doctors
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "doctor"
 **/
export const getApiV1Doctors = ApiCommon.requestMaker<
  getApiV1Doctors_Type,
  getApiV1Doctors_Response
>({
  id: "getApiV1Doctors",
  path: "/api/v1/doctors",
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

export type getApiV1Doctor_Type = {
  doctorId: string
}
export type getApiV1Doctor_Response = Types.DoctorViewModel
/**
 * GET /api/v1/doctors/{doctorId}
 *
 * Sample request:
 *
 *     GET /api/v1/doctors/1
 **/
export const getApiV1Doctor = ApiCommon.requestMaker<getApiV1Doctor_Type, getApiV1Doctor_Response>({
  id: "getApiV1Doctor",
  path: "/api/v1/doctors/{doctorId}",
  verb: "GET",
  parameters: [{ name: "doctorId", required: true, in: "path" }]
})

export type putApiV1Doctor_Type = {
  body?: Types.UpdateDoctorCommand
  doctorId: string
}
export type putApiV1Doctor_Response = boolean
/**
 * PUT /api/v1/doctors/{doctorId}
 *
 * Sample request:
 *
 *     PUT /api/v1/doctors/1
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
export const putApiV1Doctor = ApiCommon.requestMaker<putApiV1Doctor_Type, putApiV1Doctor_Response>({
  id: "putApiV1Doctor",
  path: "/api/v1/doctors/{doctorId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "doctorId", required: true, in: "path" }
  ]
})

export type deleteApiV1Doctor_Type = {
  doctorId: string
}
export type deleteApiV1Doctor_Response = boolean
/**
 * DELETE /api/v1/doctors/{doctorId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/doctors/1
 **/
export const deleteApiV1Doctor = ApiCommon.requestMaker<
  deleteApiV1Doctor_Type,
  deleteApiV1Doctor_Response
>({
  id: "deleteApiV1Doctor",
  path: "/api/v1/doctors/{doctorId}",
  verb: "DELETE",
  parameters: [{ name: "doctorId", required: true, in: "path" }]
})
