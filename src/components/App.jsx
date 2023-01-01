import { Section } from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { ContactListItem } from './ContactList/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/contacts/selectors';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));
const NewContact = lazy(() => import('pages/NewContact'));


const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactForm/>
        </Section>

        <Section title="Contacts">
          <Filter/>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactListItem />
        </Section>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home /> } />
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/contacts" element={<Contacts />}/>
            <Route path="/newContact" element={<NewContact />}/>

          </Route>
        </Routes>
      </div>
    );
}

export default App;
