import React, { useState } from "react";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import Basicinfo from "./Form/Basicinfo";
import Contactinfo from './Form/Contactinfo'
import Personalinfo from './Form/Personalinfo'



function Stapper(){

// its State
const [act , setact1] = useState(0)

// its Main Steps see Yoour Screen
const steps=[
  "Basic Information" , "Contact Information", "Persnal Information"
]

// its Next Function change Your Components
let next = ()=>{
  setact1(act+1)
  
}

// its Back Function reverse Your Components
let back = ()=>{
  setact1(act-1)
}

// its Switch Case Function Render Your Components on Your Screen
let showComp=(act,next,back)=>{
  switch(act){
    case 0:
      return <Basicinfo next={next}/>
      case 1:
        return <Contactinfo back={back} next={next}/>
        case 2:
        return <Personalinfo back={back}  next={next} />
  }
}






return(
  <>
  <Stepper activeStep={act} alternativeLabel>
{
 steps.map((v)=>(
  <Step key={v}>
  <StepLabel>{v}</StepLabel>
      </Step>
 ))
}
  </Stepper>
<Typography>
  {showComp(act,next,back)}
</Typography>



  </>
)


}


export default Stapper




