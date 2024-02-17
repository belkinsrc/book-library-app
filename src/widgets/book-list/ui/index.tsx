import { useSelector } from 'react-redux';
import { Book } from '@/entities/book';
import { DeleteBook } from '@/features/delete-book';
import { ToggleFavoriteBook } from '@/features/toggle-favorite-book';
import { RootState } from '@/app/store';
import styles from './styles.module.scss';

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.books);

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
              ToggleFavoriteBook={
                <ToggleFavoriteBook bookId={book.id} isFavorite={book.isFavorite} />
              }
              DeleteBook={<DeleteBook bookId={book.id} />}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export { BookList };
