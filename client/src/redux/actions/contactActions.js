import axios from "axios"
import { GET_CONTACTS } from "../constante/actionsTypes"
export const getContacts=()=>(dispatch)=>{
axios.get("/api/contacts/")
.then((res)=>dispatch({type:GET_CONTACTS,payload:res.data}))
.catch((err)=>console.log(err))
}
export const addContact=(newContact)=>(dispatch)=>{
    axios.post("/api/contacts/add",newContact)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}
export const deleteContact=(idContact)=>(dispatch)=>{
    axios.delete(`/api/contacts/delete/${idContact}`)
    .then((res)=>dispatch(getContacts()))
    .catch((err)=>console.log(err))
}