import { useDispatch } from "react-redux";
import { removeContactsThunk } from "../../redux/contactsOps.js";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    dispatch(removeContactsThunk(id));
    // console.log(id);

    // console.log(action);
  };
  return (
    <>
      <li className="contact-conteiner">
        <p>{contact.name}</p>
        <p>{contact.number}</p>
        <button
          className="contact-delete"
          onClick={() => handleOnDelete(contact.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
