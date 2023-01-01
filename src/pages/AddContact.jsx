import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/NewContactForm/NewContactForm';

const NewContact = () => {
  return (
    <Section title="Create new contact">
      <AddContactForm />
    </Section>
  );
};

export default NewContact;