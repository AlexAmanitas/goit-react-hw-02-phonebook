import ContactsListItem from 'components/ContactsItem';
import PropTypes from 'prop-types';
import { ContactList } from './Contacts.styled';

const Contacts = ({ data, filter, onDelete }) => {
  const filterData = data.filter(el => {
    return el.name.toLowerCase().includes(filter);
  });

  const handleOnClick = evt => {
    onDelete(evt);
  };

  if (filterData.length === 0) return;
  return (
    <ContactList>
      {filterData.map(({ name, number, id }) => {
        console.log(id, name, number);

        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={handleOnClick}
          />
        );
      })}
    </ContactList>
  );
};

export default Contacts;

Contacts.propTypes = {
  props: PropTypes.shape({
    onDelete: PropTypes.func.isRequired,
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
    filter: PropTypes.string.isRequired,
  }),
};
