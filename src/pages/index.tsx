import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTE_CONSTANTS } from '@/shared/config';

const BookLibraryPage = lazy(() => import('./book-library/ui'));

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANTS.HOME} element={<BookLibraryPage />} />
    </Routes>
  );
};

export { Routing };
