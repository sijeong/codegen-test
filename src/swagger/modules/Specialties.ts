import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Specialties_Type = {
  body?: Types.CreateSpecialtyCommand
  specialtyTypeId?: string
}
export type postApiV1Specialties_Response = string
/**
 * POST /api/v1/specialties
 *
 * Sample request:
 *
 *     POST /api/v1/specialties
 *     {
 *         "name": "Coronary artery disease",
 *         "description": "Coronary artery disease",
 *         "specialtyType": "Cardiology"
 *     }
 **/
export const postApiV1Specialties = ApiCommon.requestMaker<
  postApiV1Specialties_Type,
  postApiV1Specialties_Response
>({
  id: "postApiV1Specialties",
  path: "/api/v1/specialties",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "specialtyTypeId", in: "query" }
  ]
})

export type getApiV1Specialties_Type = {
  Created?: string
  Current?: boolean
  Description?: string
  Id?: string
  lastRetrieved?: string
  limit?: number
  Name?: string
  page?: number
  SpecialtyTypeId?: string
}
export type getApiV1Specialties_Response = Types.SpecialtiesViewModel
/**
 * GET /api/v1/specialties
 *
 * Sample request:
 *
 *     GET /api/v1/specialties
 **/
export const getApiV1Specialties = ApiCommon.requestMaker<
  getApiV1Specialties_Type,
  getApiV1Specialties_Response
>({
  id: "getApiV1Specialties",
  path: "/api/v1/specialties",
  verb: "GET",
  parameters: [
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "Description", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "Name", in: "query" },
    { name: "page", in: "query" },
    { name: "SpecialtyTypeId", in: "query" }
  ]
})

export type getApiV1Specialtie_Type = {
  specialtyId: string
}
export type getApiV1Specialtie_Response = Types.SpecialtyViewModel
/**
 * GET /api/v1/specialties/{specialtyId}
 *
 * Sample request:
 *
 *     GET /api/v1/specialties/1
 **/
export const getApiV1Specialtie = ApiCommon.requestMaker<
  getApiV1Specialtie_Type,
  getApiV1Specialtie_Response
>({
  id: "getApiV1Specialtie",
  path: "/api/v1/specialties/{specialtyId}",
  verb: "GET",
  parameters: [{ name: "specialtyId", required: true, in: "path" }]
})

export type putApiV1Specialtie_Type = {
  body?: Types.UpdateSpecialtyCommand
  specialtyId: string
}
export type putApiV1Specialtie_Response = boolean
/**
 * PUT /api/v1/specialties/{specialtyId}
 *
 * Sample request:
 *
 *     PUT /api/v1/specialties/1
 *     {
 *         "name": "Dilated cardiomyopathy",
 *         "description": "Dilated cardiomyopathy"
 *     }
 **/
export const putApiV1Specialtie = ApiCommon.requestMaker<
  putApiV1Specialtie_Type,
  putApiV1Specialtie_Response
>({
  id: "putApiV1Specialtie",
  path: "/api/v1/specialties/{specialtyId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type deleteApiV1Specialtie_Type = {
  specialtyId: string
}
export type deleteApiV1Specialtie_Response = boolean
/**
 * DELETE /api/v1/specialties/{specialtyId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/specialties/1
 **/
export const deleteApiV1Specialtie = ApiCommon.requestMaker<
  deleteApiV1Specialtie_Type,
  deleteApiV1Specialtie_Response
>({
  id: "deleteApiV1Specialtie",
  path: "/api/v1/specialties/{specialtyId}",
  verb: "DELETE",
  parameters: [{ name: "specialtyId", required: true, in: "path" }]
})
