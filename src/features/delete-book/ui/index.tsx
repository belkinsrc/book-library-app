import { useDispatch } from 'react-redux';
import { deleteBook } from '@/entities/book';
import { Button } from '@/shared/ui';

interface DeleteBookProps {
  bookId: string;
}

const DeleteBook: React.FC<DeleteBookProps> = ({ bookId }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteBook(bookId));
  }

  return (
    <Button classType="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export { DeleteBook };
