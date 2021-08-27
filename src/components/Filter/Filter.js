import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <span className={css.title}> Find contacts by name</span>
    <input
      className={css.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Filter;
