import React , {useRef} from 'react'

const TableComponent = ({list,filter,search,deleteFunction}) => {

  const reference = useRef(null);

  const deleteButton = (id) => {
    deleteFunction(id);    
  }

  return (
    <div>
   <input type="text" placeholder='search' onChange={filter}/>
   <input type="text" placeholder="special search" ref={reference} />
   <button onClick={() => { search(reference.current.value) }}>special search</button>
   <table>
       <thead>
           <tr>
               <th>id</th>
               <th>name</th>
               <th>delete</th>
           </tr>
       </thead>

       <tbody>

{list.map( listElement =>{
    let {id , name} = listElement;  
     return (        
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td><button onClick={ () => deleteButton({id}) }>delete</button></td>
        </tr>
    ) 
    })
}

    
       </tbody>
   </table>

    </div>
  )
}

export default TableComponent
