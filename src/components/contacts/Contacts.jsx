import PropTypes from 'prop-types';
import Filter from 'components/filter/Filter';
import css from './Contacts.module.css';

const Contacts = ({ contacts, filter, onFilterChange, onDeleteClick }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={onFilterChange}></Filter>
      <ul className={css.contacts}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.item}>
              <p>
                {contact.name} {contact.number}
              </p>
              <button
                type="button"
                className={css.delete}
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
