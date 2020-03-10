import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Countries_Type = {
  body?: Types.CreateCountryCommand
}
export type postApiV1Countries_Response = string
/**
 * POST /api/v1/countries
 *
 * Sample request:
 *
 *     POST /api/v1/countries
 *     {
 *         "name": "Korea",
 *         "description": "Republic of Korea",
 *         "medias": [
 *             {
 *                 "mediaType": "Photo",
 *                 "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SouthKorea.png",
 *                 "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SouthKorea.png",
 *                 "description": "string"
 *             }
 *         ]
 *     }
 **/
export const postApiV1Countries = ApiCommon.requestMaker<
  postApiV1Countries_Type,
  postApiV1Countries_Response
>({
  id: "postApiV1Countries",
  path: "/api/v1/countries",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})

export type getApiV1Countries_Type = {
  CreatedDate?: string
  Current?: boolean
  Description?: string
  Id?: string
  lastRetrieved?: string
  limit?: number
  Name?: string
  page?: number
}
export type getApiV1Countries_Response = Types.CountriesViewModel
/**
 * GET /api/v1/countries
 *
 * Sample request:
 *
 *     GET /api/v1/countries
 *     {
 *         "countryPageQueryFilter": {
 *             "page": 1,
 *             "limit": 20,
 *             "lastRetrived": "2020-02-05T08:40"
 *         }
 *     }
 **/
export const getApiV1Countries = ApiCommon.requestMaker<
  getApiV1Countries_Type,
  getApiV1Countries_Response
>({
  id: "getApiV1Countries",
  path: "/api/v1/countries",
  verb: "GET",
  parameters: [
    { name: "CreatedDate", in: "query" },
    { name: "Current", in: "query" },
    { name: "Description", in: "query" },
    { name: "Id", in: "query" },
    { name: "lastRetrieved", in: "query" },
    { name: "limit", in: "query" },
    { name: "Name", in: "query" },
    { name: "page", in: "query" }
  ]
})

export type getApiV1Countrie_Type = {
  countryId: string
}
export type getApiV1Countrie_Response = Types.CountryViewModel
/**
 * GET /api/v1/countries/{countryId}
 *
 * Sample request:
 *
 *     GET /api/v1/countries/1
 **/
export const getApiV1Countrie = ApiCommon.requestMaker<
  getApiV1Countrie_Type,
  getApiV1Countrie_Response
>({
  id: "getApiV1Countrie",
  path: "/api/v1/countries/{countryId}",
  verb: "GET",
  parameters: [{ name: "countryId", required: true, in: "path" }]
})

export type putApiV1Countrie_Type = {
  body?: Types.UpdateCountryCommand
  countryId: string
}
export type putApiV1Countrie_Response = boolean
/**
 * PUT /api/v1/countries/{countryId}
 *
 * Sample request:
 *
 *     PUT /api/v1/countries/1
 *     {
 *         "name": "USA",
 *         "description": "United States of America"
 *         "medias": [
 *           {
 *             "mediaType": 0,
 *             "url": "https://cloudhospitalblob.blob.core.windows.net/imagecontainer/SouthKorea.png",
 *             "thumbnailUrl": "https://cloudhospitalblob.blob.core.windows.net/thumbnailcontainer/SouthKorea.png"
 *             "description": "string",
 *             "order": 0
 *           },
 *           {
 *             "mediaType": 1,
 *             "url": "string",
 *             "description": "string",
 *             "order": 1
 *           }
 *         ],
 *     }
 **/
export const putApiV1Countrie = ApiCommon.requestMaker<
  putApiV1Countrie_Type,
  putApiV1Countrie_Response
>({
  id: "putApiV1Countrie",
  path: "/api/v1/countries/{countryId}",
  verb: "PUT",
  parameters: [
    { name: "body", in: "body" },
    { name: "countryId", required: true, in: "path" }
  ]
})

export type deleteApiV1Countrie_Type = {
  countryId: string
}
export type deleteApiV1Countrie_Response = boolean
/**
 * DELETE /api/v1/countries/{countryId}
 *
 * Sample request:
 *
 *     DELETE /api/v1/countries/1
 **/
export const deleteApiV1Countrie = ApiCommon.requestMaker<
  deleteApiV1Countrie_Type,
  deleteApiV1Countrie_Response
>({
  id: "deleteApiV1Countrie",
  path: "/api/v1/countries/{countryId}",
  verb: "DELETE",
  parameters: [{ name: "countryId", required: true, in: "path" }]
})
