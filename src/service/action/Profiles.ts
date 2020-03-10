/// <reference path="../types.ts"/>
/** @module action/Profiles */
// Auto-generated, edits will be overwritten
import * as Profiles from '../Profiles'

export const GET_API_V1_PROFILES_START = 's/Profiles/GET_API_V1_PROFILES_START'
export const GET_API_V1_PROFILES = 's/Profiles/GET_API_V1_PROFILES'
export type GET_API_V1_PROFILES = api.UserViewModel

export function getApiV1Profiles(info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_PROFILES_START, meta: { info } })
    return Profiles.getApiV1Profiles()
      .then(response => dispatch({
        type: GET_API_V1_PROFILES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const POST_API_V1_PROFILES_CHANGEEMAIL_START = 's/Profiles/POST_API_V1_PROFILES_CHANGEEMAIL_START'
export const POST_API_V1_PROFILES_CHANGEEMAIL = 's/Profiles/POST_API_V1_PROFILES_CHANGEEMAIL'
export type POST_API_V1_PROFILES_CHANGEEMAIL = boolean

export function postApiV1ProfilesChangeemail(options?: Profiles.PostApiV1ProfilesChangeemailOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_PROFILES_CHANGEEMAIL_START, meta: { info } })
    return Profiles.postApiV1ProfilesChangeemail(options)
      .then(response => dispatch({
        type: POST_API_V1_PROFILES_CHANGEEMAIL,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
