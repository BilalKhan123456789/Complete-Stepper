import React, { useEffect, useState } from "react";
import { TextField ,Button  } from "@mui/material";

const Basicinfo = (props) => {

const [all , setall]= useState({
  Fname:"",
  Lname:"",
  Nname:""
})


let submit=()=>{
  props.next()
  localStorage.setItem("Fname",all.Fname)
localStorage.setItem("Lname",all.Lname)
localStorage.setItem("Nname",all.Nname)

}



  return (
    <>
      <div style={{ border:"2px dotted blue", width:"270px",  margin:"auto", textAlign: "center" }}>
        <h1>Welcome!</h1>
        <TextField
          id="standard-basic"
          label="First Name"
          name="Fname"
          variant="standard"
          onChange={(e)=>{setall({...all, [e.target.name]: e.target.value})}}
        />
        <br /> <br />
        <TextField
          id="standard-basic"
          label="Last Name"
          name="Lname"
          variant="standard"
          onChange={(e)=>{setall({...all, [e.target.name]: e.target.value})}}

        />
        <br /> <br />
        <TextField
          id="standard-basic"
          label="Nick Name"
          name="Nname"
          variant="standard"
          onChange={(e)=>{setall({...all, [e.target.name]: e.target.value})}}

        />
        <br /> <br />
        <Button variant="contained" type="reset" color="error" >Reset </Button>
      <Button variant="contained" onClick={()=>submit()}  > Next</Button>
      {/* <Button variant="contained" onClick={()=>submit()}  >Submit</Button> */}

      </div>


 
    </>
  );
};

export default Basicinfo;
