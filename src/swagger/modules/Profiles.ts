import ApiCommon = require("../api-common")
// @ts-ignore
import Types = require("../api-types")

export type getApiV1Profiles_Type = {}
export type getApiV1Profiles_Response = Types.UserViewModel
/**
 * GET /api/v1/profiles
 *
 * Sample request:
 *
 *     GET /api/v1/profiles
 **/
export const getApiV1Profiles = ApiCommon.requestMaker<
  getApiV1Profiles_Type,
  getApiV1Profiles_Response
>({
  id: "getApiV1Profiles",
  path: "/api/v1/profiles",
  verb: "GET",
  parameters: []
})

export type postApiV1ProfilesChangeemail_Type = {
  body?: Types.ChangeEmailCommand
}
export type postApiV1ProfilesChangeemail_Response = boolean
/**
 * POST /api/v1/profiles/changeemail
 *
 * Sample request:
 *
 *     POST /api/v1/profiles/changeEmail
 *     {
 *         "email": "user@example.com"
 *     }
 **/
export const postApiV1ProfilesChangeemail = ApiCommon.requestMaker<
  postApiV1ProfilesChangeemail_Type,
  postApiV1ProfilesChangeemail_Response
>({
  id: "postApiV1ProfilesChangeemail",
  path: "/api/v1/profiles/changeemail",
  verb: "POST",
  parameters: [{ name: "body", in: "body" }]
})
