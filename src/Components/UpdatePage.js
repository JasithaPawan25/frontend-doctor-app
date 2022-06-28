import Navbar from "./Navbar";
import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams ,useNavigate} from "react-router-dom";


function UpdatePage(props){

  let navigate =useNavigate();

  const { id } = useParams();

 // const patientID = props.match.params.id;

    const[ patientFname,setpatientFname] =useState('');
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

    const handlePostIssue =()=>{}

    
  const [post,setpost] =useState({})
  const [nextposts,setNextpost] =useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5002/patientone/${id}`)
    //http://localhost:5002/patientone/
    .then(respose=>{
      console.log(respose)
      setpost(respose.data)
      localStorage.setItem("couter_id",respose.data.id)
      console.log("counter",localStorage.getItem("couter_id"))
  }).catch(err=>{
    console.log(err)
    
  })

  },[id])

  const handlePostUpdate=()=>{
    axios.put(`http://localhost:5002/patient/update/${id}`,{
      // patientFname:patientFname,
      // patientLName:patientLName,
      // dateOfbirth:DateOfBirthday,
      // gender:Gender,
      id:id,
      complaint:Complaint ||post.complaint,
      bloodPressuer:bloodPressuer||post.bloodPressuer,
      pulse:pulse||post.pulse,
      weight:weight||post.weight,
      illness:Illnesses||post.illness,
      treatment:Treatment||post.treatment
    }
    ) .then(respose=>{
      console.log(respose)
  //     if(setpost(respose.data)){
  //     document.getElementById("genderId").style.display="none";

  //  }
     //  setpost(respose.data)
    alert("patient Info Updated")
    navigate("/history")

     
  }).catch(err=>{
    console.log(err)
    
  })
  }



  


    return <div><Navbar/>
       
       <div className="container">
            {/* <h1 style={{marginTop:"25px"}}>Add issue details:</h1> */}
   
<div class="card" style={{width: "50%",marginTop:"5%",marginLeft:"25%",backgroundColor:"#E2E3F8"}} >
 
  <div class="card-body">

  <div class="mb-4">
    <h5 class="card-title">Add Patient details:</h5>
    </div>

  
    <div class="mb-4">
    <input type="text" class="form-control" 
      value={post.patientFname}
      onChange={e=>setpatientFname(e.target.value)}
    id="exampleFormControlInput1" placeholder="First Name" />
    </div>


    <div class="mb-4">
    <input type="text" class="form-control" 
      value={post.patientLName}
      onChange={e=>setpatientLName(e.target.value)}
    id="exampleFormControlInput1" placeholder="Last Name" />


    </div>

    <div class="mb-4">
    <input type="text" class="form-control" 
      value={post.dateOfbirth}
      onChange={e=>setDateOfBirthday(e.target.value)}
    id="exampleFormControlInput1" placeholder="Date Of Birth" />
    </div>

    {/* <div class="mb-4">
    <input type="text" class="form-control" 
      value={Gender}
      onChange={e=>setGender(e.target.value)}
    id="exampleFormControlInput1" placeholder="Gender" />
    </div> */}

    <div class="md-4" id="xoe" style={{marginLeft:"25px",marginBottom:"15px"}}><label>Gender: <h2>{post.gender}</h2></label>
    {/* <div onChange={e=>setGender(e.target.value)}> */}
    {/* <div id="genderId">
    <div class="form-check">
  <input class="form-check-input" type="radio" name={Gender}
    value="male"  
    onChange={e=>setGender(e.target.value)}
  id="flexRadioDefault1" />

  <label class="form-check-label" for="flexRadioDefault1">
    Male --{Gender}
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

</div> */}

{/* </div> */}

<br/><br/>
<div class="row">
    <div class="col-sm-4">
   <label>Pulse</label>
    <input type="text" class="form-control" 
      value={pulse||post.pulse}
      onChange={e=>setPulse(e.target.value)}
    id="exampleFormControlInput1" placeholder="Pulse" />
    </div>

    <div class="col-sm-4">
   <label>Weight(KG)</label>
    <input type="text" class="form-control" 
      value={weight||post.weight}
      onChange={e=>setWeight(e.target.value)}
    id="exampleFormControlInput1" placeholder="Weight" />
    </div>
    <div class="col-sm-5">
    <label>Blood Pressuer</label>
    <input type="text" class="form-control" 
      value={bloodPressuer||post.bloodPressuer}
      onChange={e=>setbloodPressuer(e.target.value)}
    id="exampleFormControlInput1" placeholder="bloodPressuer" />
    </div>

    </div>




{/* -------------------------------------- */}


    </div>
   

    <div class="mb-4">
    <label>Complaint</label>
    <input type="text" class="form-control"
     value={Complaint||post.complaint}
     onChange={e=>setComplaint(e.target.value)}
    id="exampleFormControlInput1" placeholder="Complaint" />
    </div>

    <div class="mb-4">
    <label>Illnesses</label>
    <input type="text" class="form-control"
     value={Illnesses||post.illness}
     onChange={e=>setIllnesses(e.target.value)}
    id="exampleFormControlInput1" placeholder="Illnesses" />
    </div>

    <div class="mb-4">
    <label>Treatment</label>
    <input type="text" class="form-control"
     value={Treatment||post.treatment}
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
    <br/><br/><br/><input
    type="button"
    value="Update Patient"
     class="btn btn-primary"  onClick={handlePostUpdate} style={{ position:"absolute",
     bottom:" 2%",
      right:"20%"}} />
    

    {/* </div> */}
  </div>
</div>



</div>
   


    </div>
}
export default UpdatePage;