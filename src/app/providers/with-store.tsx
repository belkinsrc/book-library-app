import { Provider } from 'react-redux';
import { store } from '@/app/store';

const withStore = (component: () => React.ReactNode) => () => (
  <Provider store={store}>{component()}</Provider>
);

export { withStore };
