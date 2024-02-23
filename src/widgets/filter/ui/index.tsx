import { useDispatch, useSelector } from 'react-redux';
import { ResetFilters } from '@/features/reset-filters';
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from '@/widgets/filter';
import styles from './styles.module.scss';

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  function handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setTitleFilter(e.target.value));
  }

  function handleChangeAuthor(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setAuthorFilter(e.target.value));
  }

  function handleToggleFavorite() {
    dispatch(setOnlyFavoriteFilter());
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
        <div className={styles.filterGroup}>
          <label>
            Only Favorite
            <input type="checkbox" checked={onlyFavoriteFilter} onChange={handleToggleFavorite} />
          </label>
        </div>
        <ResetFilters />
      </div>
    </div>
  );
};

export { Filter };
