import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Home from './components/home/Home';
import AuthRootComponent from './components/auth/AuthRootComponent';

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="registration" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
