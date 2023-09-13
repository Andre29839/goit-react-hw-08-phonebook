import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from 'redux/selector';
import { Loader } from './Loader/Loader';
import css from './App.module.css';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.conteiner}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {isLoading && <Loader />}
      <h2 className={css.title}>Contacts</h2>
      {contacts.length === 0 ? (
        <p className={css.text}>You didn't have any contacts yet 😭</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};
