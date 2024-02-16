import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '@/shared/api/models';
import { Button } from '@/shared/ui';
import { addBook } from '@/entities/book';
import booksData from '@/entities/book/data/books.json';
import { getRandomBook } from '../lib';

const AddBookWithRandom: React.FC = () => {
  const dispatch = useDispatch();

  function handleAddRandomBook() {
    const { title, author } = getRandomBook(booksData);

    const randomBookWithID: Book = {
      id: uuidv4(),
      title: title,
      author: author,
      isFavorite: false,
    };

    dispatch(addBook(randomBookWithID));
  }

  return <Button onClick={handleAddRandomBook}>Add Random</Button>;
};

export { AddBookWithRandom };
