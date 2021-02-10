import { SET_FIRST_LOADING_TRUE } from '../actions/consts'
import { SET_FIRST_LOADING_FALSE } from '../actions/consts'

import { SET_ALERT_CREATE_VISIBILITY_TRUE } from '../actions/consts'
import { SET_ALERT_CREATE_VISIBILITY_FALSE } from '../actions/consts'
import { SET_ALERT_UPDATE_VISIBILITY_TRUE } from '../actions/consts'
import { SET_ALERT_UPDATE_VISIBILITY_FALSE } from '../actions/consts'
import { SET_ALERT_DELETE_VISIBILITY_TRUE } from '../actions/consts'
import { SET_ALERT_DELETE_VISIBILITY_FALSE } from '../actions/consts'

import { SET_JUST_CREATED_RESOURCE_TRUE } from '../actions/consts'
import { SET_JUST_CREATED_RESOURCE_FALSE } from '../actions/consts'
import { SET_JUST_UPDATED_RESOURCE_TRUE } from '../actions/consts'
import { SET_JUST_UPDATED_RESOURCE_FALSE } from '../actions/consts'
import { SET_JUST_DELETED_RESOURCE_TRUE } from '../actions/consts';
import { SET_JUST_DELETED_RESOURCE_FALSE } from '../actions/consts';

export function isFirstLoading(state = true, action) {
  if (action.type === SET_FIRST_LOADING_TRUE) return true
  if (action.type === SET_FIRST_LOADING_FALSE) return false 
  return state
}

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

export function isJustCreatedResource(state = false, action) {
  if (action.type === SET_JUST_CREATED_RESOURCE_TRUE) return true
  if (action.type === SET_JUST_CREATED_RESOURCE_FALSE) return false 
  return state
}

export function isJustUpdatedResource(state = false, action) {
  if (action.type === SET_JUST_UPDATED_RESOURCE_TRUE) return true
  if (action.type === SET_JUST_UPDATED_RESOURCE_FALSE) return false 
  return state
}

export function isJustDeletedResource(state = false, action) {
  if (action.type === SET_JUST_DELETED_RESOURCE_TRUE) return true
  if (action.type === SET_JUST_DELETED_RESOURCE_FALSE) return false 
  return state
}



