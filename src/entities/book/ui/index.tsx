import styles from './styles.module.scss';

interface BookProps {
  title: string;
  author: string;
  sequence: number;
  DeleteBook: React.ReactNode;
  ToggleFavoriteBook: React.ReactNode;
}

const Book: React.FC<BookProps> = ({ title, author, sequence, DeleteBook, ToggleFavoriteBook }) => {
  return (
    <li className={styles.book}>
      <div className={styles.bookInfo}>
        {sequence}. {title} by <strong>{author}</strong>
      </div>
      <div className={styles.bookActions}>
        {ToggleFavoriteBook}
        {DeleteBook}
      </div>
    </li>
  );
};

export { Book };
