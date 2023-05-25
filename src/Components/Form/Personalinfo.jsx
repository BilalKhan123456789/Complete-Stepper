import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { auth, db, stg } from "../../Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { onValue,ref,set, push } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import {getDownloadURL, ref as sRef, uploadBytes } from 'firebase/storage'





const Personalinfo = (props) => {
  const [data, setdata] = useState({
    email: "",
    Pass: "",
  });
  let Mno;
  let Pno;
  let file;
  let Lname;
  let Pass;
  let email;
  let Fname;
  let Nname;

  useEffect(() => {
    Fname = localStorage.getItem("Fname");

    Lname = localStorage.getItem("Lname");

    Nname = localStorage.getItem("Nname");

    email = localStorage.getItem("email");

   file = localStorage.getItem("file");

    Pass = localStorage.getItem("Pass");

   Pno = localStorage.getItem("Pno");

    Mno = localStorage.getItem("Mno");
  });



  let url

  let upload=(e)=>{
    const upref= sRef(stg,`image/${e.target.files[0].name}`)
    console.log(e.target.files[0]);
    uploadBytes(upref,e.target.files[0])
    .then((snapshot)=>{
      getDownloadURL(snapshot.ref)
      .then((url)=>{
        console.log(url)
      })
      .catch((e)=>{
    
      })
    }).catch((e)=>{
    
    })
    
    
    
    
      }
    






  let submit = async() => {
    localStorage.setItem("email", data.email);
    localStorage.setItem("Pass", data.Pass);
    localStorage.setItem("file", url);

    const user = createUserWithEmailAndPassword(auth, email, Pass);

// const stgref = sRef(stg,"Images")
  






 
let obj={
  
Mno : Mno,

Pno: Pno,

file : file,

Lname: Lname,

Pass: Pass,

email: email,

Fname:Fname,

Nname:Nname
}

const dataref = ref(db,`user`)
await push(dataref,obj)
toast.success("Your Data Has Been Submitted " ,{
  autoClose:2000
})};







  return (
    <div>
      <div
        style={{
          border: "2px dotted blue",
          width: "270px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <h1>Welcome!</h1>
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          variant="standard"
          onChange={(e) => {
            setdata({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br /> <br />
        <TextField
          id="standard-basic"
          label="Password"
          name="Pass"
          variant="standard"
          onChange={(e) => {
            setdata({ ...data, [e.target.name]: e.target.value });
          }}
        />
        <br /> <br />
        <TextField
          id="standard-basic"
          name="file"
          onChange={(e)=>upload(e)}
          type="file"
          variant="standard"
        
        />
        <br /> <br />
        
        <Button variant="contained" color="error" onClick={() => props.back()}>
          Back
        </Button>
        <Button variant="contained" onClick={() => submit()}>
          Submit
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Personalinfo;
