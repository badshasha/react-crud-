
import React from 'react'

const TableComponent = ({list,hi}) => {
 console.log(list);

  const deleteMethod = (id) => {
      hi(id);
  }
  
  return (
    <div>
        <table>

            <tr>
                <th>id</th>
                <th>Name</th>
                <th>delete</th>
            </tr>

            {/* loog information */}

            { list.map( (element) => {
                return (
                <tr key={element.id}>
                    <th>{element.id}</th>
                    <th>{element.name}</th>
                    <button onClick={() => { deleteMethod(element.id) }}>delete</button>
                </tr>
                )
            } ) }


        </table>
    </div>
  )
}

export default TableComponent
