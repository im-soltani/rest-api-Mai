import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import{editContact} from "../redux/actions/contactActions"

function EditModal({contact}) {
  const[modal,setModal]=useState(false)
  const [name,setName]=useState(contact.name)
  const[email,setEmail]=useState(contact.email)
  const[phone,setPhone]=useState(contact.phone)
  
  const toggle=()=>{
    setModal(!modal)
  }
  const dispatch=useDispatch()
  const editt=()=>{
    dispatch(editContact(contact._id,{name,email,phone}))
    toggle()
  }
  return (
    <div>
    <Button color="danger" onClick={toggle}>
      edit contact{" "}
    </Button>
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader >edit modal</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
             onChange={(e)=>setEmail(e.target.value)}
             value={email}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">name</Label>
            <Input
            onChange={(e)=>setName(e.target.value)}
             value={name}
              type="text"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">phone</Label>
            <Input
            onChange={(e)=>setPhone(e.target.value)}
              value={phone}
              type="text"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={editt}>
          save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
  )
}

export default EditModal