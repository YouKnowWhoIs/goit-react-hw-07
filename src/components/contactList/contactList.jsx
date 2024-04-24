import { Contact } from "../contact/contact.jsx";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const selectFilterContacts = useSelector(
    (state) => state.filters.filters.name
  );

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectFilterContacts.toLowerCase())
  );

  return (
    <ul className="contact-list">
      {filterContacts.length > 0 ? (
        filterContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>You don`t have a contacts</p>
      )}
    </ul>
  );
};
