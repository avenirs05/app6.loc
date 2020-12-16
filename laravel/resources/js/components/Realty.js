import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function Realty({realties}) {
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







