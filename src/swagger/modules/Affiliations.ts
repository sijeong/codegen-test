import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1HospitalDoctor_Type = {
  doctorId: string
  hospitalId: string
}
export type postApiV1HospitalDoctor_Response = Types.DoctorAffiliationViewModel
/**
 * POST /api/v1/hospitals/{hospitalId}/doctors/{doctorId}
 *
 * Sample request:
 *
 *     POST /api/v1/hospitals/1/doctors/1
 **/
export const postApiV1HospitalDoctor = ApiCommon.requestMaker<
  postApiV1HospitalDoctor_Type,
  postApiV1HospitalDoctor_Response
>({
  id: "postApiV1HospitalDoctor",
  path: "/api/v1/hospitals/{hospitalId}/doctors/{doctorId}",
  verb: "POST",
  parameters: [
    { name: "doctorId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type deleteApiV1HospitalDoctor_Type = {
  doctorId: string
  hospitalId: string
}
export type deleteApiV1HospitalDoctor_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}/doctors/{doctorId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1/doctors/1
 **/
export const deleteApiV1HospitalDoctor = ApiCommon.requestMaker<
  deleteApiV1HospitalDoctor_Type,
  deleteApiV1HospitalDoctor_Response
>({
  id: "deleteApiV1HospitalDoctor",
  path: "/api/v1/hospitals/{hospitalId}/doctors/{doctorId}",
  verb: "DELETE",
  parameters: [
    { name: "doctorId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type postApiV1HospitalManager_Type = {
  hospitalId: string
  managerId: string
}
export type postApiV1HospitalManager_Response = Types.ManagerAffiliationViewModel
/**
 * POST /api/v1/hospitals/{hospitalId}/managers/{managerId}
 *
 * Sample request:
 *
 *     POST /api/v1/hospitals/1/managers/1
 **/
export const postApiV1HospitalManager = ApiCommon.requestMaker<
  postApiV1HospitalManager_Type,
  postApiV1HospitalManager_Response
>({
  id: "postApiV1HospitalManager",
  path: "/api/v1/hospitals/{hospitalId}/managers/{managerId}",
  verb: "POST",
  parameters: [
    { name: "hospitalId", required: true, in: "path" },
    { name: "managerId", required: true, in: "path" }
  ]
})

export type deleteApiV1HospitalManager_Type = {
  hospitalId: string
  managerId: string
}
export type deleteApiV1HospitalManager_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}/managers/{managerId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1/managers/1
 **/
export const deleteApiV1HospitalManager = ApiCommon.requestMaker<
  deleteApiV1HospitalManager_Type,
  deleteApiV1HospitalManager_Response
>({
  id: "deleteApiV1HospitalManager",
  path: "/api/v1/hospitals/{hospitalId}/managers/{managerId}",
  verb: "DELETE",
  parameters: [
    { name: "hospitalId", required: true, in: "path" },
    { name: "managerId", required: true, in: "path" }
  ]
})
