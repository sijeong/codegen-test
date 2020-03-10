import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type postApiV1Movies_Type = {}
export type postApiV1Movies_Response = void
/**
 * POST /api/v1/movies
 *
 **/
export const postApiV1Movies = ApiCommon.requestMaker<
  postApiV1Movies_Type,
  postApiV1Movies_Response
>({
  id: "postApiV1Movies",
  path: "/api/v1/movies",
  verb: "POST",
  parameters: []
})
