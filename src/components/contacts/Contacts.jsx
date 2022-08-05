import PropTypes from 'prop-types';
import Filter from 'components/filter/Filter';

const Contacts = ({ contacts, filter, onFilterChange, onDeleteClick }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={onFilterChange}></Filter>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <button
                type="button"
                onClick={() => {
                  onDeleteClick(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  onDeleteClick: PropTypes.func,
};
export default Contacts;
