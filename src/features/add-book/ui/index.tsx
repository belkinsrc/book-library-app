import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { BookType } from '@/shared/api';
import { Button } from '@/shared/ui';
import { addBook } from '@/entities/book';
import styles from './styles.module.scss';

const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (title && author) {
      const newBook: BookType = {
        id: uuidv4(),
        title,
        author,
        isFavorite: false,
      };

      dispatch(addBook(newBook));
      setTitle('');
      setAuthor('');
    }
  }

  return (
    <form className={styles.form} action="" onSubmit={handleSubmit}>
      <div>
        <label className={styles.formLabel} htmlFor="title">
          Title:
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="title"
          value={title}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
        />
      </div>
      <div>
        <label className={styles.formLabel} htmlFor="author">
          Author:
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="author"
          value={author}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setAuthor(e.currentTarget.value)}
        />
      </div>
      <Button type="submit">Add Book</Button>
    </form>
  );
};

export { AddBook };
