import { useSelector } from 'react-redux';
import { Book, selectBooks } from '@/entities/book';
import { DeleteBook } from '@/features/delete-book';
import { ToggleFavoriteBook } from '@/features/toggle-favorite-book';
import { selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter } from '@/widgets/filter';
import styles from './styles.module.scss';

const BookList: React.FC = () => {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const filteredBooks = books.filter((book) => {
    const titleMatches = book.title.toLowerCase().includes(titleFilter.toLowerCase());
    const authorMatches = book.author.toLowerCase().includes(authorFilter.toLowerCase());
    const favoriteMatches = onlyFavoriteFilter ? book.isFavorite : true;
    return titleMatches && authorMatches && favoriteMatches;
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
