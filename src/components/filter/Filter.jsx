import PropTypes from 'prop-types';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="">
        Find Contact
        <input type="text" value={filter} onChange={onFilterChange} />
      </label>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
export default Filter;
