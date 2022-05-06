import logo from './logo.svg';
import './App.css';
import {useState } from 'react';

// import component 
import UserShow from './components/UserShow';




function App() {

//   const [state,setState] = useState([]); // value is empty array 

//   const GetPost = () => {
//     const url = "https://localhost:7255/api/Blogger/getAll";
//     fetch(url , {
//       method : 'GET',
//     })
//     .then( (response) => response.json() )
//     .then( (data) => {
//         // console.log(data);  // testing information
//         setState(data);
//     } )
//     .catch( (error) => console.log("shavendra there is a error ") );

//   }



  return (
    <div className="App">
        <UserShow />      
    </div>
  );
      }

export default App;
