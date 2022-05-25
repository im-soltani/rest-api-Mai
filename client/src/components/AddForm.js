import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {addContact} from "../redux/actions/contactActions"

function AddForm() {
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const[name,setName]=useState("")
  const[cancel,setCancel]=useState(false)
  const dispatch=useDispatch()
  const add=()=>{
    const newContact={email,phone,name}
    dispatch(addContact(newContact))
    setCancel(!cancel)
  }
  return (
    <>
    {cancel?(
      <Navigate to="/list" />
    ):(
    <div style={{margin:"100px"}}>
      <Form>
      <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
              onChange={(e)=>setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input
              onChange={(e)=>setName(e.target.value)}
                type="text"
                name="name"
                id="exampleName"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Phone</Label>
              <Input
              onChange={(e)=>setPhone(e.target.value)}
                type="text"
                name="Phone"
                id="examplePhone"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <Button onClick={add}>Add Contact</Button>
            <Button onClick={()=>setCancel(!cancel)}>Cancel</Button>
      </Form>
      

    </div>
    )
}
</>

  )
  
}

export default AddForm