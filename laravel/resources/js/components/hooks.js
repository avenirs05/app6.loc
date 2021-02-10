import React, { useEffect } from 'react'
import { useRefEffect } from 'react-use-ref-effect';

export const useClickByHotKey = (eventName, eventKey) => 
  useRefEffect(el => {    
    let listener = document.addEventListener(eventName, function(event) {
      if (event.key == eventKey) {
        el.click() 
      }     
    }) 

    return () => { 
      removeEventListener(eventName, listener) 
    }    
  }, [])


export const useJustCreated = (getResource, pageNum, noAlert, noCreated, isCreated) =>   
  useEffect(() => {
    if (isCreated) {
      getResource(pageNum)
      window.setTimeout(() => {
        noAlert()
      }, 2000)
      noCreated()
    }
  }, [isCreated])
