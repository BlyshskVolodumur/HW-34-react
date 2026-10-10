import { useSelector } from "react-redux";
import Contact from "./Contact";
import { selectFilteredContacts } from "../redux/selectors";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
