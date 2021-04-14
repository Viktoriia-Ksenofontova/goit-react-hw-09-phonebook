import ContactForm from '../ContactForm';
import ContactList from '../Contacts/ContactsList';
import Section from '../Section';
import Filter from '../Filter';

function ContactsView() {
  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}

export default ContactsView;
