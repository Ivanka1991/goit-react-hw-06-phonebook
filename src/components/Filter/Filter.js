import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';
import css from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <span className={css.title}> Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default Filter;
