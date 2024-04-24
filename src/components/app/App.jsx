import { ContactForm } from "../contactForm/contactForm.jsx";
import { SearchBox } from "../searchBox/searchBox.jsx";
import { ContactList } from "../contactList/contactList.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1 className="phonebook-text">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}

export default App;
