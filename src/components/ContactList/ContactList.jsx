import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selector';
import { useEffect } from 'react';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={css.list_item}>
            <span className={css.name}>{name}: </span>
            <span className={css.number}>{phone}</span>
            <button
              className={css.button}
              onClick={() => handleDeleteContact(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
