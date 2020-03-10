import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Images_Type = {}
export type postApiV1Images_Response = void
/**
 * POST /api/v1/images
 *
 **/
export const postApiV1Images = ApiCommon.requestMaker<
  postApiV1Images_Type,
  postApiV1Images_Response
>({
  id: "postApiV1Images",
  path: "/api/v1/images",
  verb: "POST",
  parameters: []
})
