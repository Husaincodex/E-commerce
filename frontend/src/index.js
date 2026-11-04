import { Provider } from 'react-redux';
import store from './redux/store';

// Wrap your existing App component
<Provider store={store}>
  <App />
</Provider>
