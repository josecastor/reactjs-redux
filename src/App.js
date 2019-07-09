import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Route from './routes';

function App() {
  return (
    <BrowserRouter>
      {/** <Header /> */}
      <Route />
    </BrowserRouter>
  );
}

export default App;
