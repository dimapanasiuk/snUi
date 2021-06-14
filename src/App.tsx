import React from 'react';
import Layout from './components/Layout';
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from './components/Counter';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout />
      <Counter />
    </Provider>
  )
}

export default App;
