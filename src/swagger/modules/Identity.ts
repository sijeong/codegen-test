import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type getApiV1Identity_Type = {}
export type getApiV1Identity_Response = void
/**
 * GET /api/v1/identity
 *
 * Smaple request:
 *
 *     GET /api/v1/identity
 **/
export const getApiV1Identity = ApiCommon.requestMaker<
  getApiV1Identity_Type,
  getApiV1Identity_Response
>({
  id: "getApiV1Identity",
  path: "/api/v1/identity",
  verb: "GET",
  parameters: []
})
