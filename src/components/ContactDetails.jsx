import { useEffect, useState } from "react";

const ContactDetails = ({ contactId, setSelectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContact();
  }, [contactId]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h2>{contact.name}</h2>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Website: {contact.website}</p>
      
      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
  );
};

export default ContactDetails;