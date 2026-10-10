import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button type="button" onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}
