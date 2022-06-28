import React,{ useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Auth from './Auth/Auth'

function History(props){
  let navigate =useNavigate();

  const [posts,setposts] =useState([])
  const [requestError,setRequestError]= useState(null)
  const[search,setSearch]=useState()
  const[searchError,setSearchError]=useState(null)


  useEffect(()=>{
    axios.get("http://localhost:5002/patientall",
   
    )
    .then(res=>{
    console.log(res)
   // console.log(JSON.stringify(res))
   // console.log(res.data.headers)

 //  const str =setposts(res.data.updatedAt)



    setposts(res.data)

  


    if(!search==null)
  {
    console.log("ere")
    return  axios.get(`http://localhost:5002/patientall`)
    .then(res=>{
      setposts(res.data)
    //  setSearch(res.data)
  
    })
  }
    // var length = setposts(res.data.length)
   // setcounts(res.data)
  }).catch(err=>{
    console.log(err)
    setRequestError(err)
  })

},[])

 
const patientDelete=(e)=>{

  axios.delete(`http://localhost:5002/patient/delete/${e.target.value}`)
  .then(() => {

    // /patient/delete/:patientId
      // Issue GET request after item deleted to get updated list
      // that excludes user of id
      alert("Patient Deleted!")
    //  navigate("/his")


      return  axios.get(`http://localhost:5002/patientall`)
  }).then(res=>{
    setposts(res.data)
  //  setSearch(res.data)

  })


}

// if((search===[]))
//   {
//     console.log("ere")
//       axios.get(`http://localhost:5002/patientall`)
//     .then(res=>{
//       setposts(res.data)
//     //  setSearch(res.data)
  
//     })
//   }





const handleSearch =(e)=>{
  // requestError(null);
  axios.get(`http://localhost:5002/patienthistoryz/${search}`,
 
  )
  .then(res=>{
   
  console.log(res)

 
 
  const data =res.data;
  console.log("Array",data)


 setposts(res.data)

 if(data==false)
 {
  console.log("Error")
  navigate("/notfound")

 // setRequestError("Error")
 }


 
//  const date=res.data.updatedAt;
//  console.log ("dateOnly",date);
//  const dateOnly =date.substring(0,10)
//    console.log("date",dateOnly)
  



}).catch(err=>{
  console.log("error",err)
  setRequestError(err)
 // navigate("/errorPage")
 window.location.reload ("/history")
//  if(!(err))
//  {
//   console.log("ersr")
//  }


//  if(setRequestError(null))
//   {
//     console.log("err")
//     setRequestError("not found")
//   }
  
})

}




// const handleSearch =(e)=>{
//   console.log("target_value",`${search}`)

//   axios.get(`http://localhost:5002/patienthistoryz/${search}`)
//   .then((res) => {

//     console.log("Search:",res.data)
//     setSearch(res.data)

//   }).catch(err=>{
//     console.log(err)
//     setRequestError(err)
//   })

// }



    // /patient/delete/:patientId
      // Issue GET request after item deleted to get updated list
      // that excludes user of id
     // alert("Patient Deleted!")
    //  navigate("/his")


    //  return  axios.get(`http://localhost:5002/patientall`)
  // }).then(res=>{
  //   setSearch(res.data)

  // })

  // if({res.data.patientFname}==null)
  // {
  //   <h1>Error</h1>
  // }











    return <div><Navbar/>
     <div className="container">
     <h1>History</h1>

     <div class="search" id="sd" style={{float:"right",marginTop:"-50px"}}>
    {/* <form class="d-flex" role="search" > */}
   {/* <h1/>{requestError}<h1/> */}

      <input type="text" class="form-control me-2" 
       style={{width:"50%"}} placeholder="Search"
       // aria-label="Search"
       value={search}
       
       onChange={e=>setSearch(e.target.value)} />

      <input type="button"
       class="btn btn-outline-success"
       value="SearchPatient" 
      onClick={handleSearch}
      />
  {/* </form> */}

    </div>

    </div>

  
      <div className="container">
        <br/>

     


    {/* <div class="search" id="sd" style={{float:"right"}}>
    <form class="d-flex" role="search" >
      <input class="form-control me-2" type="search" style={{width:"50%"}} placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
    
    </div> */}

  {/* </div>
</nav> */}
      


      <div class="row">

       

        <h2 id="idError">
             {requestError}
        </h2>
        
     

      

    
      

      {posts.map(post=>(

      // localStorage.setItem('date',post.updatedAt)
     // const date= localStorage.getItem('date')
//  const date =str.slice(0,10);
//  console.log("dateOnly",date)
     //   console.log("dateOnly",date)

    



    

      



  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">

       

         
          
     
        <h2 class="card-title">{post.patientFname}</h2>
        <h5>{post.dateOfbirth} | {post.gender}</h5><h6>{post.updatedAt.substring(0,10)}</h6>
        <label><h5>Complaint</h5></label>
        <p class="card-text" style={{fontWeight:"bold"}}>- {post.complaint}</p>
        
        <label><h5>Illnesses</h5></label>
        <p class="card-text" style={{fontWeight:"bold"}}>- {post.illness}</p>
        
        <label><h5>treament</h5></label>
        <p class="card-text" style={{fontWeight:"bold"}}> - {post.treatment}</p>
        
        
      
     
        <button
            value={ `${post.id}`} 

          //  disabled={}   
          onClick={e => patientDelete(e, "value")} 
         //  onClick={handleIssue}
          class="btn btn-primary"
           style={{marginLeft:"6%",marginTop:"1%"}} >Delete</button>

{ <a href={`http://localhost:3000/update/${post.id}`}> 
        <button  class="btn btn-primary" style={{marginTop:"1px",marginLeft:"6%"}}>Update</button>

        </a>}

      </div>
    </div>
  </div>

))}

</div>

    
      </div>
     
    </div>
}
export default History;