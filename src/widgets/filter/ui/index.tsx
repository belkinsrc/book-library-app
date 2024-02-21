import { useDispatch, useSelector } from 'react-redux';
import { ResetFilters } from '@/features/reset-filters';
import { setTitleFilter, selectTitleFitler } from '@/widgets/filter';
import styles from './styles.module.scss';

const Filter: React.FC = () => {
  const dispatch = useDispatch();

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setTitleFilter(e.target.value));
  }

  const titleFilter = useSelector(selectTitleFitler);

  return (
    <div className={`block ${styles.filter}`}>
      <div className={styles.filterRow}>
        <div className={styles.filterGroup}>
          <input
            type="text"
            placeholder="Filter by title..."
            value={titleFilter}
            onChange={handleChangeInput}
          />
        </div>
        <ResetFilters />
      </div>
    </div>
  );
};

export { Filter };
