import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'


interface ColumnProps {
  col: {
    id: string
    list: string[]
  }
}



export function Column ({ col}:ColumnProps)  {
  return (
    <Droppable droppableId={col.id}>
      {provided => (
        <div className='p-8 flex flex-col mt-3'>
          <h2 className='mt-8'>{col.id}</h2>
         <div className=' bg-[#ddd] rounded-md p-4 flex flex-col flex-grow mt-2'>
            {col.list.map((text, index) => (
              <Item key={text} text={text} index={index} />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  )
}


