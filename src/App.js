import logo from './logo.svg';
import './App.css';
import TableComponent from './components/TableComponent';
import {useState } from 'react';

function App() {

  const [state,setState] = useState([]); // value is empty array 

  const GetPost = () => {
    const url = "https://localhost:7255/api/Blogger/getAll";
    fetch(url , {
      method : 'GET',
    })
    .then( (response) => response.json() )
    .then( (data) => {
        // console.log(data);  // testing information
        setState(data);
    } )
    .catch( (error) => console.log("shavendra there is a error ") );

  }


  const deleteElement = (id) => {
    console.log("delete working" + id);
    let value = state.filter( obj => obj.id != id );
    setState(value);
  }

  return (
    <div className="App">
        <button onClick={GetPost}>getInformation</button>
       <TableComponent list={state} hi={deleteElement}/>
    </div>
  );
}

export default App;
