import React from "react";
import {Link,useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";

function NotFoundPage(){
    let navigate =useNavigate();


    const handlebacktohistory=()=>{
        navigate("/history")
    }

    return <div><Navbar/>
        <div class="container"><h1 style={{marginTop:"30%",marginLeft:"30%"}}>
       Search Not Found</h1>
    
       </div>
    </div>
}
export default NotFoundPage;