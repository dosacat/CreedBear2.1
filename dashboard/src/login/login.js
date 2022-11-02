import './login.css';
import React from "react";
import FormInput from '../components/FormInput';
import {doLoginUser} from "../api/user_api";


function Login() {
  const [userLogin,setUserLogin] = React.useState();
  const [loginStatus,setStatus]=React.useState({})
  const [successScreen,setScreen]=React.useState(false)


  // Only returning the 2nd login details for the sake of presentation!
  // Returns javascript obejct stored in userLogin state for later use
  function login (e){
    e.preventDefault();
    e.persist()
    
    const getUsers = async () => {
      const result = await doLoginUser(userLogin);
      setStatus(result);
      setScreen(true);
    };

    getUsers();
       
  };

 
  
  
    return (
      <>
      {successScreen && (
        <div className='welcome'>
        Welcome to C&B.io, {loginStatus.data.user.firstName} {loginStatus.data.user.lastName}!
        </div>
      )}

      {!successScreen && (
        <div className="Login">
        
        <div className='tagline'>Your access to a data driven future starts here...</div>
        <p>*Kindly note I have not enabled auth for the assignment and a default user will be returned on login in case the correct email is not provided.</p>
        <FormInput setUserLogin={setUserLogin}/>
        <button onMouseDown={e=>login(e)}>Submit</button>
      </div>
      )}

      
      </>
    );





  
}

export default Login;
