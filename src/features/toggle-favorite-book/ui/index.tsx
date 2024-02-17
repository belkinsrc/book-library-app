// import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs';
// import { useDispatch } from 'react-redux';
// import { toggleFavoriteBook } from '@/entities/book';
// import styles from './styles.module.scss';

// interface ToggleFavoriteBookProps {
//   bookId: string;
//   isFavorite: boolean;
// }

// const ToggleFavoriteBook: React.FC<ToggleFavoriteBookProps> = ({ bookId, isFavorite }) => {
//   const dispatch = useDispatch();

//   function handleToggleFavoriteBook() {
// dispatch(toggleFavoriteBook(bookId));
//   }

//   return isFavorite ? (
//     <BsBookmarkStarFill className={styles.starIcon} onClick={handleToggleFavoriteBook} />
//   ) : (
//     <BsBookmarkStar className={styles.starIcon} onClick={handleToggleFavoriteBook} />
//   );
// };

// export { ToggleFavoriteBook };
