import { Contact } from "../contact/contact.jsx";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  // console.log(filteredContacts);

  return (
    <ul className="contact-list">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>You don`t have a contacts</p>
      )}
    </ul>
  );
};
