import{useState} from "react"
import NavBar from "./components/NavBar"
import './App.css';
import { Button } from "reactstrap";
import{Route,Routes} from "react-router-dom"
import ContactList from "./components/ContactList";
import { Link } from "react-router-dom";
import AddForm from "./components/AddForm"

function App() {
  
  return (
    <div className="App">
     <NavBar />
     <Link to="/list">
     <Button>Contact list</Button>
     </Link>
     <Link to="/add">
     <Button>Add Contact</Button>
     </Link>
<Routes>
  <Route path="/list" element={<ContactList/>}/>
  <Route path="/add" element={<AddForm/>}/>
</Routes>

    </div>
  );
}

export default App;
