import React from 'react';

export default function Realties({realties}) {
  return (
    <>               
      { 
        realties.length > 0 ? 
          realties.map((realty, index) => <p key={index}>{realty.name}</p>) : 
          'Объектов нет' 
      }        
    </>
  );
}







