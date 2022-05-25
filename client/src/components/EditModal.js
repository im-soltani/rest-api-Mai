import React,{useState} from 'react'
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

function EditModal() {
  const[modal,setModal]=useState(false)
  const toggle=()=>{
    setModal(!modal)
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
             
             
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">name</Label>
            <Input
             
              type="text"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">phone</Label>
            <Input
              
              type="text"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" >
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