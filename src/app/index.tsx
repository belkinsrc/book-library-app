/* eslint-disable react-refresh/only-export-components */
import { BookLibraryPage } from '@/pages/book-library';

import { withProviders } from '@/app/providers';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <BookLibraryPage />
    </div>
  );
};

export default withProviders(App);
