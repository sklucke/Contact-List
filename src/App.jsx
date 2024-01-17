


import './App.css'
import {useState} from "react";
import ContactList from './Components/contactList'
import SelectedContact from './Components/SelectedContact';



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList  setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
  

}

export default App
