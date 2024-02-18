import { Header } from '@/widgets/header';
import { BookForm } from '@/widgets/book-form';
import { Filter } from '@/widgets/filter';
import { BookList } from '@/widgets/book-list';
import styles from './styles.module.scss';

const BookLibraryPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.leftColumn}>
          <BookForm />
        </div>
        <div className={styles.rightColumn}>
          <Filter />
          <BookList />
        </div>
      </main>
    </>
  );
};

export default BookLibraryPage;
