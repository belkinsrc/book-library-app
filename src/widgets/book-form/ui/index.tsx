import { AddBook } from '@/features/add-book';
import { AddBookWithRandom } from '@/features/add-book';
import styles from './styles.module.scss';

const BookForm: React.FC = () => {
  return (
    <div className={`block ${styles.bookForm}`}>
      <h2>Add a new Book</h2>
      <AddBook withRandom={<AddBookWithRandom />} />
    </div>
  );
};

export { BookForm };
