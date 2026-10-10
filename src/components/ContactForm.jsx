import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contacts/operations";
import { selectContacts } from "../redux/selectors";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName || !phone.trim()) return;

    const exists = contacts.some(
      (c) => c.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (exists) {
      alert(`${trimmedName} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name: trimmedName, phone: phone.trim() }));
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
