import { SET_FIRST_LOADING_TRUE } from '../actions/consts'
import { SET_FIRST_LOADING_FALSE } from '../actions/consts'

import { SET_ALERT_CREATE_VISIBILITY_TRUE } from '../actions/consts'
import { SET_ALERT_CREATE_VISIBILITY_FALSE } from '../actions/consts'
import { SET_ALERT_UPDATE_VISIBILITY_TRUE } from '../actions/consts'
import { SET_ALERT_UPDATE_VISIBILITY_FALSE } from '../actions/consts'
import { SET_ALERT_DELETE_VISIBILITY_TRUE } from '../actions/consts'
import { SET_ALERT_DELETE_VISIBILITY_FALSE } from '../actions/consts'

import { SET_JUST_CREATED_REALTY_TRUE } from '../actions/consts'
import { SET_JUST_CREATED_REALTY_FALSE } from '../actions/consts'
import { SET_JUST_UPDATED_REALTY_TRUE } from '../actions/consts'
import { SET_JUST_UPDATED_REALTY_FALSE } from '../actions/consts'
import { SET_JUST_DELETED_REALTY_TRUE } from '../actions/consts';
import { SET_JUST_DELETED_REALTY_FALSE } from '../actions/consts';

import { SET_JUST_CREATED_FEEDBACK_TRUE } from '../actions/consts'
import { SET_JUST_CREATED_FEEDBACK_FALSE } from '../actions/consts'
import { SET_JUST_UPDATED_FEEDBACK_TRUE } from '../actions/consts'
import { SET_JUST_UPDATED_FEEDBACK_FALSE } from '../actions/consts'
import { SET_JUST_DELETED_FEEDBACK_TRUE } from '../actions/consts';
import { SET_JUST_DELETED_FEEDBACK_FALSE } from '../actions/consts';


export function isAlertCreateVisible(state = false, action) {
  if (action.type === SET_ALERT_CREATE_VISIBILITY_TRUE) return true
  if (action.type === SET_ALERT_CREATE_VISIBILITY_FALSE) return false 
  return state
}

export function isAlertUpdateVisible(state = false, action) {
  if (action.type === SET_ALERT_UPDATE_VISIBILITY_TRUE) return true
  if (action.type === SET_ALERT_UPDATE_VISIBILITY_FALSE) return false 
  return state
}

export function isAlertDeleteVisible(state = false, action) {
  if (action.type === SET_ALERT_DELETE_VISIBILITY_TRUE) return true
  if (action.type === SET_ALERT_DELETE_VISIBILITY_FALSE) return false 
  return state
}

export function isFirstLoading(state = true, action) {
  if (action.type === SET_FIRST_LOADING_TRUE) return true
  if (action.type === SET_FIRST_LOADING_FALSE) return false 
  return state
}

export function isJustCreatedRealty(state = false, action) {
  if (action.type === SET_JUST_CREATED_REALTY_TRUE) return true
  if (action.type === SET_JUST_CREATED_REALTY_FALSE) return false 
  return state
}

export function isJustCreatedFeedback(state = false, action) {
  if (action.type === SET_JUST_CREATED_FEEDBACK_TRUE) return true
  if (action.type === SET_JUST_CREATED_FEEDBACK_FALSE) return false 
  return state
}

export function isJustUpdatedRealty(state = false, action) {
  if (action.type === SET_JUST_UPDATED_REALTY_TRUE) return true
  if (action.type === SET_JUST_UPDATED_REALTY_FALSE) return false 
  return state
}

export function isJustUpdatedFeedback(state = false, action) {
  if (action.type === SET_JUST_UPDATED_FEEDBACK_TRUE) return true
  if (action.type === SET_JUST_UPDATED_FEEDBACK_FALSE) return false 
  return state
}

export function isJustDeletedRealty(state = false, action) {
  if (action.type === SET_JUST_DELETED_REALTY_TRUE) return true
  if (action.type === SET_JUST_DELETED_REALTY_FALSE) return false 
  return state
}

export function isJustDeletedFeedback(state = false, action) {
  if (action.type === SET_JUST_DELETED_FEEDBACK_TRUE) return true
  if (action.type === SET_JUST_DELETED_FEEDBACK_FALSE) return false 
  return state
}

