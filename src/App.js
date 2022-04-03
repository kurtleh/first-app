import React, { useState } from 'react';
import Loginform from './containers/Loginform';
import LoggedIn from './containers/LoggedIn';


function App(){
  const adminUser={
    username:'admin',
    password:'test'
  }

  const [user,setUser]=useState({name:""});
  const [error,setError]=useState("");

  const Login=details =>{
    console.log(details);

    if(details.name==adminUser.username &&details.password==adminUser.password){
      setUser({
        name:details.name,
        
      });
    }else{
      setError("invalid data");
    }
  }

  const Logout = () =>{
    setUser({name:""});
  }
return(
    <div className='App'>
      {(user.name !="") ?(
        <><LoggedIn Login={Login} /><button onClick={Logout}>Logout</button></>
      ):(
        <Loginform Login={Login} error={error}/>
      )}

    </div>
);
}

export default App;