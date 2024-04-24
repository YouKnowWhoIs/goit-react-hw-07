import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleOnDelete = (id) => {
    const action = deleteContact(id);
    dispatch(action);

    // console.log(action);
  };
  return (
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
  );
};
