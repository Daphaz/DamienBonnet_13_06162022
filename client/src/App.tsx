import { Provider } from 'react-redux';

import store from '@/store/store';

import { Root } from './components/root';

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
