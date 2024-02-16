import { useSelector } from 'react-redux';
import { BookType } from '@/shared/api';
import { Book } from '@/entities/book';
import { DeleteBook } from '@/features/delete-book';
import styles from './styles.module.scss';

interface StateType {
  reducer: BookType[];
}

const BookList: React.FC = () => {
  const books = useSelector((state: StateType) => state.reducer);

  return (
    <div className={`block ${styles.bookList}`}>
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className={styles.bookListContainer}>
          {books.map((book, i) => (
            <Book
              key={book.id}
              title={book.title}
              author={book.author}
              sequence={++i}
              DeleteBook={<DeleteBook bookId={book.id} />}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export { BookList };
