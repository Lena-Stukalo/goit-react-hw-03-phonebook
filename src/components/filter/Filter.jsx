import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="" className={css.filter}>
        <span>Find Contact</span>
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
