import { useEffect } from 'react'

export const useSetListenerSaveBtn = refBtn => {
  useEffect(() => {     
    let listenerSaveKeydown = document.addEventListener('keydown', function(event) {
      if (event.key == 'Escape') {
        refBtn.current.click() 
      }     
    })
    return () => { 
      removeEventListener('keydown', listenerSaveKeydown) 
    }
  }, [refBtn.current])
} 