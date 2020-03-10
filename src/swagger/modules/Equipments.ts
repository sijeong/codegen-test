import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1HospitalEquipments_Type = {
  body?: Types.CreateEquipmentCommand
  hospitalId: string
}
export type postApiV1HospitalEquipments_Response = string
/**
 * POST /api/v1/hospitals/{hospitalId}/equipments
 *
 * Sample request:
 *
 *     POST /api/v1/hospitals/1/equipments
 *     {
 *         "name": "Afroasia ltd",
 *         "description": "Medical equipment",
 *         "medias": [
 *           {
 *             "mediaType": 0,
 *             "url": "imageurl",
 *             "description": "string",
 *             "order": 0
 *           }
 *         ]
 *     }
 **/
export const postApiV1HospitalEquipments = ApiCommon.requestMaker<
  postApiV1HospitalEquipments_Type,
  postApiV1HospitalEquipments_Response
>({
  id: "postApiV1HospitalEquipments",
  path: "/api/v1/hospitals/{hospitalId}/equipments",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalEquipment_Type = {
  equipmentId: string
  hospitalId: number
}
export type getApiV1HospitalEquipment_Response = Types.EquipmentViewModel
/**
 * GET /api/v1/hospitals/{hospitalId}/equipments/{equipmentId}
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/1/equipments/1
 **/
export const getApiV1HospitalEquipment = ApiCommon.requestMaker<
  getApiV1HospitalEquipment_Type,
  getApiV1HospitalEquipment_Response
>({
  id: "getApiV1HospitalEquipment",
  path: "/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}",
  verb: "GET",
  parameters: [
    { name: "equipmentId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type putApiV1HospitalEquipment_Type = {
  body?: Types.UpdateEquipmentCommand
  equipmentId: string
  hospitalId: string
}
export type putApiV1HospitalEquipment_Response = boolean
/**
 * PUT /api/v1/hospitals/{hospitalId}/equipments/{equipmentId}
 *
 * Sample request:
 *
 *     PUT /api/v1/hospitals/1/equipments/1
 *     {
 *         "description": "Upgraded medical equipment"
 *     }
 **/
export const putApiV1HospitalEquipment = ApiCommon.requestMaker<
  putApiV1HospitalEquipment_Type,
  putApiV1HospitalEquipment_Response
>({
  id: "putApiV1HospitalEquipment",
  path: "/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "equipmentId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type deleteApiV1HospitalEquipment_Type = {
  equipmentId: string
  hospitalId: string
}
export type deleteApiV1HospitalEquipment_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}/equipments/{equipmentId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1/equipments/1
 **/
export const deleteApiV1HospitalEquipment = ApiCommon.requestMaker<
  deleteApiV1HospitalEquipment_Type,
  deleteApiV1HospitalEquipment_Response
>({
  id: "deleteApiV1HospitalEquipment",
  path: "/api/v1/hospitals/{hospitalId}/equipments/{equipmentId}",
  verb: "DELETE",
  parameters: [
    { name: "equipmentId", required: true, in: "path" },
    { name: "hospitalId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalsEquipments_Type = {
  Created?: string
  Current?: boolean
  Description?: string
  HospitalId?: string
  HospitalName?: string
  Id?: string
  lastRetrieved?: string
  limit?: number
  Name?: string
  page?: number
}
export type getApiV1HospitalsEquipments_Response = Types.EquipmentsViewModel
/**
 * GET /api/v1/hospitals/equipments
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/1/equipments
 *     {
 *         "pageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         },
 *         "searchString": "Medical"
 *     }
 **/
export const getApiV1HospitalsEquipments = ApiCommon.requestMaker<
  getApiV1HospitalsEquipments_Type,
  getApiV1HospitalsEquipments_Response
>({
  id: "getApiV1HospitalsEquipments",
  path: "/api/v1/hospitals/equipments",
  verb: "GET",
  parameters: [
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "Description", in: "query" },
    { name: "HospitalId", in: "query" },
    { name: "HospitalName", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "Name", in: "query" },
    { name: "page", in: "query" }
  ]
})
