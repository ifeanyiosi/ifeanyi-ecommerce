import React from 'react'
import { Item, Title } from '../utils'

const Sales = ({ endpoint: {title, items} }) => {
  // console.log(endpoint);
  return (
    <>
      <div>
        <Title title={title} />
        <div>
          <Item />
        </div>
      </div>
    </>
  )
}

export default Sales