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