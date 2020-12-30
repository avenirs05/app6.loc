import { REALTY_STORE } from './consts';
import { realtyAllDbFields } from '../script';
import { getRealtiesAction } from './getRealtiesAction'
import React from 'react'
import { NavLink, Redirect } from "react-router"


export function realtyStoreAction(values, currentPage) {
  return function(dispatch) {  
    delete values.type    
    axios.post(route('realties.store'), { ...values }) 
         .then(response => { 
            return dispatch({ 
              type: REALTY_STORE, 
              ...realtyAllDbFields(response),
            })        
          })
          .then(response => {
            return dispatch({ 
              type: 'SET_BTN_UPDATE_REALTY_CLICKED_TRUE', 
              isBtnUpdateRealtyClicked: true 
            })        
          }) 
          .catch(error => {
            console.log(error)
        })
  }
}

