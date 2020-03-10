import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1HospitalSpecialtie_Type = {
  hospitalId: string
  specialtyId: string
}
export type postApiV1HospitalSpecialtie_Response = Types.HospitalSpecialtyViewModel
/**
 * POST /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}
 *
 * Sample request:
 *
 *     POST /api/v1/hospitals/1/specialties/1
 **/
export const postApiV1HospitalSpecialtie = ApiCommon.requestMaker<
  postApiV1HospitalSpecialtie_Type,
  postApiV1HospitalSpecialtie_Response
>({
  id: "postApiV1HospitalSpecialtie",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}",
  verb: "POST",
  parameters: [
    { name: "hospitalId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type deleteApiV1HospitalSpecialtie_Type = {
  hospitalId: string
  specialtyId: string
}
export type deleteApiV1HospitalSpecialtie_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1/specialties/1
 **/
export const deleteApiV1HospitalSpecialtie = ApiCommon.requestMaker<
  deleteApiV1HospitalSpecialtie_Type,
  deleteApiV1HospitalSpecialtie_Response
>({
  id: "deleteApiV1HospitalSpecialtie",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}",
  verb: "DELETE",
  parameters: [
    { name: "hospitalId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type putApiV1HospitalSpecialtysequence_Type = {
  body?: Types.UpdateHospitalSpecialtySequenceCommand
  hospitalId: string
  SpecialtyTypeId: string
}
export type putApiV1HospitalSpecialtysequence_Response = boolean
/**
 * PUT /api/v1/hospitals/{hospitalId}/specialtysequence
 *
 * Sample request:
 *
 *     PUT /api/v1/hospitals/1/specialtysequence
 *     {
 *         "specialtyType": "Endocrinology",
 *         "hospitalSpecialtySequence": [14, 30, 5, 7]
 *     }
 **/
export const putApiV1HospitalSpecialtysequence = ApiCommon.requestMaker<
  putApiV1HospitalSpecialtysequence_Type,
  putApiV1HospitalSpecialtysequence_Response
>({
  id: "putApiV1HospitalSpecialtysequence",
  path: "/api/v1/hospitals/{hospitalId}/specialtysequence",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" },
    { name: "SpecialtyTypeId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalsSpecialties_Type = {
  Created?: string
  Current?: boolean
  HospitalId?: string
  HospitalName?: string
  lastRetrieved?: string
  limit?: number
  page?: number
  SpecialtyId?: string
  SpecialtyName?: string
  SpecialtyTypeId?: string
}
export type getApiV1HospitalsSpecialties_Response = Types.HospitalSpecialtiesViewModel
/**
 * GET /api/v1/hospitals/specialties
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/specialties
 **/
export const getApiV1HospitalsSpecialties = ApiCommon.requestMaker<
  getApiV1HospitalsSpecialties_Type,
  getApiV1HospitalsSpecialties_Response
>({
  id: "getApiV1HospitalsSpecialties",
  path: "/api/v1/hospitals/specialties",
  verb: "GET",
  parameters: [
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "HospitalId", in: "query" },
    { name: "HospitalName", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "page", in: "query" },
    { name: "SpecialtyId", in: "query" },
    { name: "SpecialtyName", in: "query" },
    { name: "SpecialtyTypeId", in: "query" }
  ]
})
