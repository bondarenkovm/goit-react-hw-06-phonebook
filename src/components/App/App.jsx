// import { useState, useEffect } from 'react';

import { Container } from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
// import { testContacts } from 'data';
// import { Toaster } from 'react-hot-toast';
// import { toast } from 'react-hot-toast';

function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setfilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // function formSubmitHandler(data) {
  //   if (contacts.find(contact => contact.name === data.name)) {
  //     toast(`${data.name} is alreary in contacts`, {
  //       style: {
  //         background: '#ca1616',
  //         color: '#fff',
  //       },
  //     });
  //   } else {
  //     const newContact = { ...data };
  //     setContacts(prevState => [...prevState, newContact]);
  //   }
  // }

  // function deleteContact(id) {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // }

  // function onFilterName({ target: { value } }) {
  //   setfilter(value);
  // }

  // const lowerCaseFilter = filter.toLowerCase();
  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(lowerCaseFilter)
  // );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* <ContactForm formSubmit={formSubmitHandler} /> */}
      <h2>Contacts</h2>
      <Filter />
      {/* <Filter value={filter} onChangeInput={onFilterName}></Filter> */}
      <ContactList />
      {/* <ContactList
        contacts={filteredContacts}
        onDelete={deleteContact}
      ></ContactList> */}
      {/* <Toaster
        toastOptions={{
          duration: 2000,
        }}
      /> */}
    </Container>
  );
  // }
}

export { App };
