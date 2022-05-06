import React , {useRef} from 'react'


const FormComponent = ({postModel}) => {

    const references_input = useRef("");

    
    const blogMdoel = {
        name : "no name"
    };

    const submitHandler = (e) => {
        e.preventDefault();      
        blogMdoel.name = references_input.current.value;
        sendForm(blogMdoel);
    }

    const sendForm = () =>{       
        const posttoCreate = {
            name : blogMdoel.name
        }
        postModel(posttoCreate);
    }

  return (
    <div>
        <form method="post">
            <label>user name</label>
            <input type="text" ref={references_input} name='name' />             
            <button  onClick={submitHandler} > submit </button>
            <button >cancal</button>
        </form>
    </div>
  )
}

export default FormComponent
