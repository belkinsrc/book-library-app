import styles from './styles.module.scss';

const BookList: React.FC = () => {
  return (
    <div className={`block ${styles.bookList}`}>
      <h2>BookList</h2>
    </div>
  );
};

export { BookList };
