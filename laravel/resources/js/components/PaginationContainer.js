import React from 'react'
import Pagination from 'react-bootstrap/Pagination'


export default function PaginationContainer({totalPages}) {
  let active = 1; 
  let items = [];

  function test (event) {
    //console.log(event.target.innerHTML)
  }

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item onClick={test} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Pagination>{items}</Pagination>
    </>
  )
}

