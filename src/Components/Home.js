import Navbar from "./Navbar";
import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home(props){
  let navigate =useNavigate();


  const[patientFname,setpatientFname] =useState('');
  const[ patientLName,setpatientLName] =useState('');
  const[ DateOfBirthday,setDateOfBirthday] =useState('');
  const[ Complaint,setComplaint] =useState('');
  const[ Illnesses,setIllnesses] =useState('');
  const[ Treatment,setTreatment] =useState('');
  const[ Gender,setGender] =useState('');
  const[ pulse,setPulse] =useState('');
  const[ weight,setWeight] =useState('');
  const[ bloodPressuer,setbloodPressuer] =useState('');

  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const[ post,setPost] =useState('');
  const[ search,setSearch] =useState('');
  const[ requestError,setRequestError] =useState('');


  const publicuserToken= localStorage.getItem('publicjwt')



  console.log("publicuserToken", publicuserToken)

  const token = publicuserToken;

  axios.interceptors.request.use(
    config  => {
        config.headers.authorization =`Bearer ${token}`;
        console.log(config)
        return config;
    },
    error =>{
        return Promise.reject(error)
    }
)


  // console.log(value)

  
 
 


const handlePostIssue = ()=>{

  axios.post("http://localhost:5002/patient",{
    patientFname:patientFname,
    patientLName:patientLName,
    dateOfbirth:DateOfBirthday,
    gender:Gender,
    complaint:Complaint,
    bloodPressuer:bloodPressuer,
    pulse:pulse,
    weight:weight,
    illness:Illnesses,
    treatment:Treatment

  /*
    "patientFname": "Kusalwei",
        "patientLName": "Godfreyere",
        "dateOfbirth": "1988.12.03",
        "gender": "male",
        "complaint": "anything",
        "bloodPressuer": "notmanl",
        "pulse": "50",
        "weight": "60Kg",
        "illness": "fever",
        "treatment": "zzawer"
  */

  }
  ).then(respose=>{
    console.log(respose)
 //   localStorage.setItem('issueNo',respose.data.IssueNo)



  //  localStorage.setItem('publicjwt',response.data.token)

  //   const publicIssueNo= localStorage.getItem('issueNo')
 
 
 
  //  console.log("publicIssueNo", publicIssueNo)

    alert("Your Patient's complaint is submitted!")
    window.location.reload ("/home")

  }).catch(error=>{
    console.log(error)
  })

}

if(search==null)
{
  console.log("res")
}

const handleSearch=(e)=>{

  axios.get(`http://localhost:5002/patientupdatesearch/${search}`,
 
  )
  .then(res=>{
  console.log(res)
 // console.log(JSON.stringify(res))
 // console.log(res.data.headers)
  setPost(res.data)

  if((setPost(res.data)==null))
  {
    document.getElementById("updatebutton").style.display="inline";
    //createbutton
    document.getElementById("createbutton").style.display="none";
    //genderInterface
    document.getElementById("genderInterface").style.display="none";
    //cardid
   // document.getElementById("cardid").style.display="none";

  }

  const data =res.data;
  console.log("Array",data)

 if(data=="No user found with the given name")
 {
  console.log("Error")
  navigate("/notfound")

 // setRequestError("Error")
 }

  // if(setPost(res.data)==null )
  // {
  //   console.log("err")
  //  // setRequestError("not found")
  //   const NotFound = "Error"
  //   //cardid
  //   document.getElementById("cardid").style.display="none";
  // }


  // if(!search)
  // {
  //   console.log("ere")
  //   return  axios.get(`http://localhost:5002/patientall`)
  //   .then(res=>{
  //     setposts(res.data)
  //   //  setSearch(res.data)
  
  //   })
  // }

  // var length = setposts(res.data.length)
 // setcounts(res.data)

}).catch(err=>{
  console.log(err)
  setRequestError(err)
 // navigate("/notfound")
  window.location.reload ("/home")
})

}

// const handleUpdate=()=>{
//   if(setPost(res.data)==null)
//   {
//     document.getElementById("updatebutton").style.display="none";

//   }

// }

const handleUpdate=()=>{

  axios.post("http://localhost:5002/patient",{
    patientFname:post.patientFname,
    patientLName:post.patientLName,
    dateOfbirth:post.dateOfbirth,
    gender:post.gender,
    complaint:Complaint,
    bloodPressuer:bloodPressuer||post.bloodPressuer,
    pulse:pulse ||post.pulse,
    weight:weight||post.weight,
    illness:Illnesses,
    treatment:Treatment })

      .then((response) => {
        console.log(response)
      
     //   setPost(response.data)
        alert("patient record added")
        window.location.reload ("/home")
      });

}









    return  <div><Navbar/>




<div className="container">
     <h1></h1><br/> <br/> 

     <div class="search" id="sd" style={{float:"right",marginTop:"-50px"}}>
    {/* <form class="d-flex" role="search" > */}
   <h1/><h1/>

      <input type="text"  class="form-control me-2" 
       style={{width:"50%"}} placeholder="Search"
       // aria-label="Search"
       value={search}
       
       onChange={e=>setSearch(e.target.value)}
       />

     

      <input type="button" icon="search"
       class="btn btn-outline-success"
      value="Search"

       onClick={handleSearch}
      />
    
  
  {/* </form> */}

    </div>

    </div>

    <div className="container">

            {/* <h1 style={{marginTop:"25px"}}>Add issue details:</h1> */}
            <h1>{requestError}</h1>
   
<div class="card" id="cardid" style={{width: "50%",marginTop:"5%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">Add Patient details:</h5>
    </div>

  
    <div class="mb-4">
    <input type="text" class="form-control" 
     value={patientFname || post.patientFname}
      onChange={e=>setpatientFname(e.target.value)}
    id="exampleFormControlInput1" placeholder="First Name" />
    </div>


    <div class="mb-4">
    <input type="text" class="form-control" 
      value={patientLName || post.patientLName}
  //  value={patientLName ||`${patientLName}`}
      onChange={e=>setpatientLName(e.target.value)}
    id="exampleFormControlInput1" placeholder="Last Name" />
    </div>

    <div class="mb-4">
    <input type="text" class="form-control" 
      value={DateOfBirthday ||post.dateOfbirth}
      onChange={e=>setDateOfBirthday(e.target.value)}
    id="exampleFormControlInput1" placeholder="Date Of Birth" />
    </div>

    {/* <div class="mb-4">
    <input type="text" class="form-control" 
      value={Gender}
      onChange={e=>setGender(e.target.value)}
    id="exampleFormControlIn put1" placeholder="Gender" />
    </div> */}

   

    <div class="md-4" id="xoe" style={{marginLeft:"25px",marginBottom:"15px"}}><label>Gender:<h1>{post.gender}</h1></label>
    <div id="genderInterface" >
    <div class="form-check" >
  <input class="form-check-input" type="radio" name={Gender}
    value={"male" ||post.gender }
    onChange={e=>setGender(e.target.value)}
  id="flexRadioDefault1" />

  <label class="form-check-label" for="flexRadioDefault1">
    Male --{Gender ||post.gender}
  </label>

</div>
<div class="form-check">
  <input class="form-check-input" type="radio"
   value="female"
   name={Gender} 
   onChange={e=>setGender(e.target.value)}
   id="flexRadioDefault2"  />

  <label class="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" value="other" 
  name={Gender} id="flexRadioDefault2"
  onChange={e=>setGender(e.target.value)}
    />
  <label class="form-check-label" for="flexRadioDefault2">
    Other
  </label>
</div>

</div>

<br/><br/>
<div class="row">
    <div class="col-sm-4">
   <label>Pulse</label>
    <input type="text" class="form-control" 
      value={pulse || post.pulse}
      onChange={e=>setPulse(e.target.value)}
    id="exampleFormControlInput1" placeholder="Pulse" />
    </div>

    <div class="col-sm-4">
   <label>Weight(KG)</label>
    <input type="text" class="form-control" 
      value={weight || post.weight}
      onChange={e=>setWeight(e.target.value)}
    id="exampleFormControlInput1" placeholder="Weight" />
    </div>
    <div class="col-sm-5">
    <label>Blood Pressuer</label>
    <input type="text" class="form-control" 
      value={bloodPressuer ||post.bloodPressuer}
      onChange={e=>setbloodPressuer(e.target.value)}
    id="exampleFormControlInput1" placeholder="Blood Pressuer" />
    </div>

    </div>




{/* -------------------------------------- */}


    </div>
   

    <div class="mb-4">
    <label>Complaint</label>
    <input type="text" class="form-control"
     value={Complaint || post.complaint}
     onChange={e=>setComplaint(e.target.value)}
    id="exampleFormControlInput1" placeholder="Complaint" />
    </div>

    <div class="mb-4">
    <label>Treatment</label>
    <input type="text" class="form-control"
     value={Illnesses || post.illness}
     onChange={e=>setIllnesses(e.target.value)}
    id="exampleFormControlInput1" placeholder="Illnesses" />
    </div>

    <div class="mb-4">
    <label>Treatment</label>
    <input type="text" class="form-control"
     value={Treatment || post.treatment}
     onChange={e=>setTreatment(e.target.value)}
    id="exampleFormControlInput1" placeholder="treament" />
    </div>

  

    {/* <div class="mb-4">
    <textarea type="textarea"  rows="3" 
    //  value={Detail}
    //  onChange={e=>setDetail(e.target.value)}
    class="form-control" id="exampleFormControlInput1" placeholder="Issue Detail" />
    </div> */}

    {/* <div class="mb-4"> */}
    {/* <button  class="btn btn-primary">Send Issue</button> handlePostIssue */}
    <br/><input
    type="button"
    id="createbutton"
    value="Save Patient"
     class="btn btn-primary"  onClick={handlePostIssue} style={{ position:"absolute",
     bottom:" 2%",
      right:"20%"}} />

      <input type="button"  class="btn btn-primary" id="updatebutton" style={{display:"none"}} value={`Create new complaint ${post.patientFname}`} onClick={handleUpdate}/>
    

    {/* </div> */}
  </div>
</div>





</div>
   

    </div>
}
export default Home;