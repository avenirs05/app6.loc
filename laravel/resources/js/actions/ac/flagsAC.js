import { SET_FIRST_LOADING_TRUE } from '../consts'
import { SET_FIRST_LOADING_FALSE } from '../consts'

import { SET_JUST_CREATED_RESOURCE_TRUE } from '../consts'
import { SET_JUST_CREATED_RESOURCE_FALSE } from '../consts'
import { SET_JUST_UPDATED_RESOURCE_TRUE } from '../consts'
import { SET_JUST_UPDATED_RESOURCE_FALSE } from '../consts'
import { SET_JUST_DELETED_RESOURCE_TRUE } from '../consts'
import { SET_JUST_DELETED_RESOURCE_FALSE } from '../consts'

import { SET_ALERT_CREATE_VISIBILITY_TRUE } from '../consts'
import { SET_ALERT_CREATE_VISIBILITY_FALSE } from '../consts'
import { SET_ALERT_UPDATE_VISIBILITY_TRUE } from '../consts'
import { SET_ALERT_UPDATE_VISIBILITY_FALSE } from '../consts'
import { SET_ALERT_DELETE_VISIBILITY_TRUE } from '../consts'
import { SET_ALERT_DELETE_VISIBILITY_FALSE } from '../consts'


export const setFirstLoadingTrueAC = () => ({ type: SET_FIRST_LOADING_TRUE })
export const setFirstLoadingFalseAC = () => ({ type: SET_FIRST_LOADING_FALSE })

export const setJustCreatedResourceTrueAC = () => ({ type: SET_JUST_CREATED_RESOURCE_TRUE })
export const setJustCreatedResourceFalseAC = () => ({ type: SET_JUST_CREATED_RESOURCE_FALSE })
export const setJustUpdatedResourceTrueAC = () => ({ type: SET_JUST_UPDATED_RESOURCE_TRUE })
export const setJustUpdatedResourceFalseAC = () => ({ type: SET_JUST_UPDATED_RESOURCE_FALSE })
export const setJustDeletedResourceTrueAC = () => ({ type: SET_JUST_DELETED_RESOURCE_TRUE })
export const setJustDeletedResourceFalseAC = () => ({ type: SET_JUST_DELETED_RESOURCE_FALSE })

export const setAlertCreateVisibilityTrueAC = () => ({ type: SET_ALERT_CREATE_VISIBILITY_TRUE })
export const setAlertCreateVisibilityFalseAC = () => ({ type: SET_ALERT_CREATE_VISIBILITY_FALSE })
export const setAlertUpdateVisibilityTrueAC = () => ({ type: SET_ALERT_UPDATE_VISIBILITY_TRUE })
export const setAlertUpdateVisibilityFalseAC = () => ({ type: SET_ALERT_UPDATE_VISIBILITY_FALSE })
export const setAlertDeleteVisibilityTrueAC = () => ({ type: SET_ALERT_DELETE_VISIBILITY_TRUE })
export const setAlertDeleteVisibilityFalseAC = () => ({ type: SET_ALERT_DELETE_VISIBILITY_FALSE })