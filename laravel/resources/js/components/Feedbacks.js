import React from 'react';

export default function Feedbacks({feedbacks}) {
  return (
    <>               
      { 
        feedbacks.length > 0 ? 
          feedbacks.map((feedback, index) => <p key={index}>{feedback.author}</p>) : 
          'Отзывов нет' 
      }        
    </>
  );
}







