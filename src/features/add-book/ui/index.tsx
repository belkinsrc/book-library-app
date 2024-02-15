import { useState } from 'react';
import styles from './styles.module.scss';

const AddBook: React.FC = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // dispatch action
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
      <button className={styles.formButton} type="submit">
        Add Book
      </button>
    </form>
  );
};

export { AddBook };
