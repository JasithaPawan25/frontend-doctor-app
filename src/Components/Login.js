import React,{ useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(props){

  const [username,setUsername] =useState('');
  const[password,setPassword]=useState('');
  const [error,setError]=useState(null);
 const [loading,setLoading]=useState(false);

 let navigate =useNavigate()

  const handleLogin=()=>{
  
    setError(null);
    setLoading(true);

    axios.post("http://localhost:5002/loginuser",
    {  uname:username,
     password:password
     }
     ).then(response=>{
       setLoading(false);
     //  props.history.push('/issue')
    //  setUserSession(response.data.token);
 
    localStorage.setItem('publicjwt',response.data.token)
    localStorage.setItem('publicUserNo',response.data.user)
 
 
    const publicuserToken= localStorage.getItem('publicjwt')
    const publicUserNo= localStorage.getItem('publicUserNo')
 
 
 
   console.log("publicuserToken", publicuserToken)
   console.log("publicUserNo", publicUserNo)


     // setUserSession
  //   response.data.username
      //  props.history.push('/issue')
      navigate("/home")
    //   console.log("response >>>",response);
     }).catch(error=>{
       setLoading(false)
 
       if(error.response.status === 401 || error.response.status === 400)
       {
         setError(error.response.data.message);
         setError("Unable to login !!! Please try again");
       }
       else{
         setError("Somethig went wrong !!! Please try again");
       }
 
      // console.error("error >>>",error)
     });
 
   //  props.history.push('/issue')
     
   


  }


    return <div>
        
        <div className="container">
            <h1 style={{marginTop:"25px",marginLeft:"30%"}}>Welcome to Doctor App</h1>
   
<div class="card" style={{width: "50%",marginTop:"10%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">Login</h5>
    </div>

    <div class="mb-4">
    <input type="text" 
      value={username}
     onChange={e=>setUsername(e.target.value)}
      class="form-control" id="exampleFormControlInput1" placeholder="User Name" />
    </div>

    <div class="mb-4">
    <input type="password" 
      value={password}
      onChange={e=>setPassword(e.target.value)}
    
    class="form-control" id="exampleFormControlInput1" placeholder="Password" />
    </div>
    <br/>
    {error && <div className="error"  style={{marginTop:"-10px",color:"red"}} >{error}</div>}
    

    <div class="mb-4">
    {/* <button   class="btn btn-primary">Login</button>  <button  class="btn btn-primary">Register</button> */}
    <input type="button"  class="btn btn-primary" 
     value={loading ?"Loading...": "Login"} 
     disabled={loading}
     onClick={handleLogin}
    />  <input type="button"  class="btn btn-primary" value="Register" onClick={""}  />
    </div>
  </div>
</div>



</div>

    </div>
}
export default Login;