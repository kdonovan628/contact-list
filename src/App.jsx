import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <ContactDetails contactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}

export default App;
