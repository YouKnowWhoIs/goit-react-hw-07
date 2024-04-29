import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ContactForm } from "../contactForm/contactForm.jsx";
import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import { featchContactsThunk } from "../../redux/contactsOps.js";
import { Loading } from "../loading/loading.jsx";
import { Error } from "../error/error.jsx";

function App() {
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(featchContactsThunk());
  }, [dispatch]);

  // console.log("items", items);
  // console.log("loader", loading);
  // console.log("error", error);

  return (
    <>
      <div>
        <h1 className="phonebook-text">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <Loading />}
        {error && <Error />}
        {items && <ContactList />}
      </div>
    </>
  );
}

export default App;
