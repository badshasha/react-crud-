import React, { useState } from 'react'

// redux 
import { useSelector, useDispatch } from 'react-redux';
import { addRange , addOne ,addNew , remove} from '../redux/reducer/userReducer';


// component 
import TableComponent from './TableComponent';
import FormComponent from './FormComponent';

// axios import 
import { CRUD , controllers } from '../api/apiInfo';
import { useInRouterContext } from 'react-router-dom';

const UserShow = () => {

  const userInfo = useSelector(reducer => reducer.users.value);  // original data
  const [filterinfomation,setFilterInformation] = useState([]);  
  const dispatch = useDispatch();


  
 // function controlles api 
 // i cannot mode thing thing because dispatch inside of it [ dispatch not working outside from the component]
  const addElement = () => { 

     CRUD(controllers.Blogger)
     .fetch()
     .then( response => {
         dispatch(addRange(response.data))
     } )
     .catch( () => console.log("something whent wrong") );     
    
  }

 // filtering function 
 // only display 
  const filter = (event) => {
    let value = event.target.value
    let simpleArray = userInfo.filter( element => element.name.includes(value) )
    setFilterInformation(simpleArray);
 }

  const Search = (value) => {
    
    if(value != ""){
        CRUD(controllers.Blogger)
      .fetchId(value)
      .then( response => {       
        console.log(response.data);
        dispatch(addOne(response.data));          
      } )
        .catch( () => console.log("error find"));
    }  
    
  }

  const PostModel = (model) => {
    if(model.name != null && model.name != ""){
      CRUD(controllers.Blogger)
      .create(model)
      .then( response => dispatch(addNew(response.data)))
      .catch(  () => console.log("problem in creating process") );


     

      // manugal method 
      // fetch("https://localhost:7255/api/blogger/CreateBlogger", {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(model)  
      // })
      // .then( response =>  response.json()).then(data => { alert("item added to the database"); dispatch(addNew(data))})
      // .catch( () => console.log("error finded"));




    } // end if statement
   


  } // post model ends 


  // delete content 
  const deleteModel = (id) =>{

    CRUD(controllers.Blogger)
    .delete(id.id)
    .then(response => {
      dispatch(remove(id.id))
    })
    .catch(() => console.log("delete error"));
  }


  return (
    <div>
        <button onClick={addElement}> fullinfo </button>   
        <TableComponent
           list={(filterinfomation.length === 0 ) ? userInfo : filterinfomation }
           filter = {filter}
           search = {Search}
           deleteFunction = {deleteModel}
           />

        <FormComponent postModel = {PostModel} />
        </div>
  )
}

export default UserShow;
