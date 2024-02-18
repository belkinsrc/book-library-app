/* eslint-disable react-refresh/only-export-components */
import { Routing } from '@/pages';
import { withProviders } from '@/app/providers';

import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Routing />
    </div>
  );
};

export default withProviders(App);
