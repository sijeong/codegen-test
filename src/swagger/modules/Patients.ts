import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Patients_Type = {
  body?: Types.CreatePatientCommand
}
export type postApiV1Patients_Response = string
/**
 * POST /api/v1/patients
 *
 * Sample request:
 *
 *     POST /api/v1/patients
 *     {
 *         "referralCode": "123456",
 *         "email": "patient@icloudhospital.com",
 *         "firstName": "patient",
 *         "lastName": "cloud",
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
export const postApiV1Patients = ApiCommon.requestMaker<
  postApiV1Patients_Type,
  postApiV1Patients_Response
>({
  id: "postApiV1Patients",
  path: "/api/v1/patients",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Patients_Type = {
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
export type getApiV1Patients_Response = Types.PatientsViewModel
/**
 * GET /api/v1/patients
 *
 * Sample request:
 *
 *     GET /api/v1/patients
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "patient"
 *     }
 **/
export const getApiV1Patients = ApiCommon.requestMaker<
  getApiV1Patients_Type,
  getApiV1Patients_Response
>({
  id: "getApiV1Patients",
  path: "/api/v1/patients",
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

export type getApiV1Patient_Type = {
  patientId: string
}
export type getApiV1Patient_Response = Types.PatientViewModel
/**
 * GET /api/v1/patients/{patientId}
 *
 * Sample request:
 *
 *     GET /api/v1/patients/1
 **/
export const getApiV1Patient = ApiCommon.requestMaker<
  getApiV1Patient_Type,
  getApiV1Patient_Response
>({
  id: "getApiV1Patient",
  path: "/api/v1/patients/{patientId}",
  verb: "GET",
  parameters: [{ name: "patientId", required: true, in: "path" }]
})

export type putApiV1Patient_Type = {
  body?: Types.UpdatePatientCommand
  patientId: string
}
export type putApiV1Patient_Response = boolean
/**
 * PUT /api/v1/patients/{patientId}
 *
 * Sample request:
 *
 *     PUT /api/v1/patients/1
 *     {
 *         "referralCode": "string",
 *         "firstName": "patient",
 *         "lastName": "cloud",
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
export const putApiV1Patient = ApiCommon.requestMaker<
  putApiV1Patient_Type,
  putApiV1Patient_Response
>({
  id: "putApiV1Patient",
  path: "/api/v1/patients/{patientId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "patientId", required: true, in: "path" }
  ]
})

export type deleteApiV1Patient_Type = {
  patientId: string
}
export type deleteApiV1Patient_Response = boolean
/**
 * DELETE /api/v1/patients/{patientId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/patients/1
 **/
export const deleteApiV1Patient = ApiCommon.requestMaker<
  deleteApiV1Patient_Type,
  deleteApiV1Patient_Response
>({
  id: "deleteApiV1Patient",
  path: "/api/v1/patients/{patientId}",
  verb: "DELETE",
  parameters: [{ name: "patientId", required: true, in: "path" }]
})
