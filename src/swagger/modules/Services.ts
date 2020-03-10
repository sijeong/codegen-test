import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1HospitalSpecialtieServices_Type = {
  body?: Types.CreateServiceCommand
  hospitalId: string
  specialtyId: string
}
export type postApiV1HospitalSpecialtieServices_Response = string
/**
 * POST /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services
 *
 * Sample request:
 *
 *     POST /api/v1/hospitals/1/specialties/1/services
 *     {
 *         "name": "Heart check up",
 *         "description": "Asan Hospital (Asan Medical Center) is the largest multidisciplinary medical center in South Korea, which can serve 2,700 patients at once.The key specialties in the hospital are organ transplant, oncology, cardiology, and cardiac surgery.Almost half of all heart transplants in South Korea are carried out (45%) at Asan.The success of organ transplants ranges from 90%. Every day, 11,800 outpatients and 2,550 inpatients are treated in Asan Hospital. Medical tourists from the USA, China, the UAE, Russia, Kazakhstan, and Mongolia choose Asan Hospital.",
 *         "minPrice": 2235,
 *         "maxPrice": 2566,
 *         "priceReuqest": false,
 *         "procedure": "Treatment"
 *     }
 **/
export const postApiV1HospitalSpecialtieServices = ApiCommon.requestMaker<
  postApiV1HospitalSpecialtieServices_Type,
  postApiV1HospitalSpecialtieServices_Response
>({
  id: "postApiV1HospitalSpecialtieServices",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services",
  verb: "POST",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalSpecialtieService_Type = {
  hospitalId: number
  serviceId: string
  specialtyId: number
}
export type getApiV1HospitalSpecialtieService_Response = Types.ServiceViewModel
/**
 * GET /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/1/specialties/1/services/1
 **/
export const getApiV1HospitalSpecialtieService = ApiCommon.requestMaker<
  getApiV1HospitalSpecialtieService_Type,
  getApiV1HospitalSpecialtieService_Response
>({
  id: "getApiV1HospitalSpecialtieService",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}",
  verb: "GET",
  parameters: [
    { name: "hospitalId", required: true, in: "path" },
    { name: "serviceId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type putApiV1HospitalSpecialtieService_Type = {
  body?: Types.UpdateServiceCommand
  hospitalId: string
  serviceId: string
  specialtyId: string
}
export type putApiV1HospitalSpecialtieService_Response = boolean
/**
 * PUT /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}
 *
 * Sample request:
 *
 *     PUT /api/v1/hospitals/1/specialties/1/services/1
 *     {
 *         "name": "Extended analysis of blood",
 *         "description": "Extended analysis of blood description.",
 *         "minPrice": 1000,
 *         "maxPrice": 2600,
 *         "priceReuqest": false
 *     }
 **/
export const putApiV1HospitalSpecialtieService = ApiCommon.requestMaker<
  putApiV1HospitalSpecialtieService_Type,
  putApiV1HospitalSpecialtieService_Response
>({
  id: "putApiV1HospitalSpecialtieService",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" },
    { name: "serviceId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type deleteApiV1HospitalSpecialtieService_Type = {
  hospitalId: string
  serviceId: string
  specialtyId: string
}
export type deleteApiV1HospitalSpecialtieService_Response = boolean
/**
 * DELETE /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/hospitals/1/specialties/1/services/1
 **/
export const deleteApiV1HospitalSpecialtieService = ApiCommon.requestMaker<
  deleteApiV1HospitalSpecialtieService_Type,
  deleteApiV1HospitalSpecialtieService_Response
>({
  id: "deleteApiV1HospitalSpecialtieService",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/services/{serviceId}",
  verb: "DELETE",
  parameters: [
    { name: "hospitalId", required: true, in: "path" },
    { name: "serviceId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type putApiV1HospitalSpecialtieServicesquence_Type = {
  body?: Types.UpdateServiceSequenceCommand
  hospitalId: string
  specialtyId: string
}
export type putApiV1HospitalSpecialtieServicesquence_Response = boolean
/**
 * PUT /api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/servicesquence
 *
 * Smaple request:
 *
 *     PUT /api/v1/hospitals/1/specialties/1/servicesquence
 *     {
 *         "serviceSequence": [1, 3, 5]
 *     }
 **/
export const putApiV1HospitalSpecialtieServicesquence = ApiCommon.requestMaker<
  putApiV1HospitalSpecialtieServicesquence_Type,
  putApiV1HospitalSpecialtieServicesquence_Response
>({
  id: "putApiV1HospitalSpecialtieServicesquence",
  path: "/api/v1/hospitals/{hospitalId}/specialties/{specialtyId}/servicesquence",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "hospitalId", required: true, in: "path" },
    { name: "specialtyId", required: true, in: "path" }
  ]
})

export type getApiV1HospitalsServices_Type = {
  Created?: string
  Current?: boolean
  Description?: string
  HospitalId?: string
  Id?: string
  lastRetrieved?: string
  limit?: number
  Name?: string
  page?: number
  Procedure?: any
  SpecialtyId?: string
  SpecialtyTypeId?: string
}
export type getApiV1HospitalsServices_Response = Types.ServicesViewModel
/**
 * GET /api/v1/hospitals/services
 *
 * Sample request:
 *
 *     GET /api/v1/hospitals/services
 **/
export const getApiV1HospitalsServices = ApiCommon.requestMaker<
  getApiV1HospitalsServices_Type,
  getApiV1HospitalsServices_Response
>({
  id: "getApiV1HospitalsServices",
  path: "/api/v1/hospitals/services",
  verb: "GET",
  parameters: [
    { name: "Created", in: "query" },
    { name: "Current", in: "query" },
    { name: "Description", in: "query" },
    { name: "HospitalId", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "Name", in: "query" },
    { name: "page", in: "query" },
    { name: "Procedure", in: "query" },
    { name: "SpecialtyId", in: "query" },
    { name: "SpecialtyTypeId", in: "query" }
  ]
})
