import { useDispatch, useSelector } from 'react-redux';
import { ResetFilters } from '@/features/reset-filters';
import {
  setTitleFilter,
  setAuthorFilter,
  selectTitleFitler,
  selectAuthorFilter,
} from '@/widgets/filter';
import styles from './styles.module.scss';

const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFitler);
  const authorFilter = useSelector(selectAuthorFilter);

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleChangeAuthor(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setAuthorFilter(e.target.value));
  }

  return (
    <div className={`block ${styles.filter}`}>
      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleFilter}
            onChange={handleChangeTitle}
          />
        </div>
        <div className={styles.filterGroup}>
          <input
            type="text"
            placeholder="Filter by author..."
            value={authorFilter}
            onChange={handleChangeAuthor}
          />
        </div>
        <ResetFilters />
      </div>
    </div>
  );
};

export { Filter };
