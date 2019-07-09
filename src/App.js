import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Route from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/** <Header /> */}
      <Route />
    </BrowserRouter>
  );
}

export default App;
