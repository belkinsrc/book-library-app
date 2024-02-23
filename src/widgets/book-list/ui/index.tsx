import { useSelector } from 'react-redux';
import { Book, selectBooks } from '@/entities/book';
import { DeleteBook } from '@/features/delete-book';
import { ToggleFavoriteBook } from '@/features/toggle-favorite-book';
import { selectFilter } from '@/widgets/filter';
import styles from './styles.module.scss';

const BookList: React.FC = () => {
  const books = useSelector(selectBooks);
  const filter = useSelector(selectFilter);

  const filteredBooks = books.filter((book) => {
    const titleMatches = book.title.toLowerCase().includes(filter.title.toLowerCase());
    const authorMatches = book.author.toLowerCase().includes(filter.author.toLowerCase());
    return titleMatches && authorMatches;
  });

  return (
    <div className={`block ${styles.bookList}`}>
      <h2>Book List</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available.</p>
      ) : (
        <ul className={styles.bookListContainer}>
          {filteredBooks.map((book, i) => (
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
