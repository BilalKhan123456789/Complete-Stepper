import React, { useEffect, useState } from "react";
import { TextField ,Button  } from "@mui/material";

function Contactinfo (props) {

  const [data , setdata]= useState({
    email:"",
    Pno:"",
    Mno:""
  })


  
let submit=()=>{
  props.next()
  localStorage.setItem("email",data.email)
localStorage.setItem("Pno",data.Pno)
localStorage.setItem("Mno",data.Mno)

}


  
  



  return (
    <div>
      <div style={{ border:"2px dotted blue", width:"270px",  margin:"auto", textAlign: "center" }}>
        <h1>Welcome!</h1>
        <TextField
          id="standard-basic"
          label="Email"
          name='email'
          variant="standard"
          onChange={(e)=>{setdata({...data, [e.target.name]: e.target.value})}}
        />
        <br /> <br />
        <TextField
          id="standard-basic"
          label="Phone Number (optional)"
          name='Pno'
          variant="standard"
          onChange={(e)=>{setdata({...data, [e.target.name]: e.target.value})}}

        />
        <br /> <br />
        <TextField
          id="standard-basic"
          label="Mobile Number"
          name='Mno'
          variant="standard"
          onChange={(e)=>{setdata({...data, [e.target.name]: e.target.value})}}

        />
        <br /> <br />
        <Button variant="contained" color="error" onClick={()=>props.back()} >Back </Button>
      <Button variant="contained" onClick={()=>submit()}> Next</Button>
      </div>


    </div>
  )
}

export default Contactinfo
