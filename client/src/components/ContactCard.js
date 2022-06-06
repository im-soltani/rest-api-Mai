import React from 'react'
import { useDispatch } from 'react-redux';
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { deleteContact } from '../redux/actions/contactActions';
import EditModal from './EditModal';
function ContactCard({contact}) {
  console.log(contact._id,"hello")
  console.log(contact,"gggggggg")
  const dispatch=useDispatch()
  const delet=()=>{
    dispatch(deleteContact(contact._id))
  }
  return (
    <div style={{ minWidth: "300px", margin: "10px" }}>
    <Card
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <CardTitle tag="h5"> {contact.name} </CardTitle>
        <CardText>{contact.email} </CardText>
        <CardText>{contact.phone} </CardText>
        <CardText>
          {contact.dateCreation.slice(0, 10)} ---{" "}
          {contact.dateCreation.slice(11, 19)}{" "}
        </CardText>
        <div style={{display:"flex",justifyContent:"space-between"}} >
          <Button onClick={delet}>Delete</Button>
          <EditModal contact={contact}/>
        </div>
    </Card>
    </div>
  )
}

export default ContactCard