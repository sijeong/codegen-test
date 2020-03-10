/// <reference path="../types.ts"/>
/** @module action/Articles */
// Auto-generated, edits will be overwritten
import * as Articles from '../Articles'

export const POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_START = 's/Articles/POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_START'
export const POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES = 's/Articles/POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES'
export type POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES = string

export function postApiV1HospitalsHospitalIdArticles(hospitalId: string, options?: Articles.PostApiV1HospitalsHospitalIdArticlesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_START, meta: { info } })
    return Articles.postApiV1HospitalsHospitalIdArticles(hospitalId, options)
      .then(response => dispatch({
        type: POST_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START = 's/Articles/GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START'
export const GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID = 's/Articles/GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID'
export type GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID = api.ArticleViewModel

export function getApiV1HospitalsHospitalIdArticlesArticleId(hospitalId: string, articleId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START, meta: { info } })
    return Articles.getApiV1HospitalsHospitalIdArticlesArticleId(hospitalId, articleId)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START = 's/Articles/PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START'
export const PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID = 's/Articles/PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID'
export type PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID = boolean

export function putApiV1HospitalsHospitalIdArticlesArticleId(hospitalId: string, articleId: string, options?: Articles.PutApiV1HospitalsHospitalIdArticlesArticleIdOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START, meta: { info } })
    return Articles.putApiV1HospitalsHospitalIdArticlesArticleId(hospitalId, articleId, options)
      .then(response => dispatch({
        type: PUT_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START = 's/Articles/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START'
export const DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID = 's/Articles/DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID'
export type DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID = boolean

export function deleteApiV1HospitalsHospitalIdArticlesArticleId(hospitalId: string, articleId: string, info?: any): any {
  return dispatch => {
    dispatch({ type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID_START, meta: { info } })
    return Articles.deleteApiV1HospitalsHospitalIdArticlesArticleId(hospitalId, articleId)
      .then(response => dispatch({
        type: DELETE_API_V1_HOSPITALS_HOSPITAL_ID_ARTICLES_ARTICLE_ID,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}

export const GET_API_V1_HOSPITALS_ARTICLES_START = 's/Articles/GET_API_V1_HOSPITALS_ARTICLES_START'
export const GET_API_V1_HOSPITALS_ARTICLES = 's/Articles/GET_API_V1_HOSPITALS_ARTICLES'
export type GET_API_V1_HOSPITALS_ARTICLES = api.ArticlesViewModel

export function getApiV1HospitalsArticles(options?: Articles.GetApiV1HospitalsArticlesOptions, info?: any): any {
  return dispatch => {
    dispatch({ type: GET_API_V1_HOSPITALS_ARTICLES_START, meta: { info } })
    return Articles.getApiV1HospitalsArticles(options)
      .then(response => dispatch({
        type: GET_API_V1_HOSPITALS_ARTICLES,
        payload: response.data,
        error: response.error,
        meta: {
          res: response.raw,
          info
        }
      }))
  }
}
