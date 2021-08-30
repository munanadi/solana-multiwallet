import { SnackbarProvider } from 'notistack';
import React from 'react';
import './App.css';
import { Demo } from './Demo';

const App = () => {
  return (
    <SnackbarProvider>
      <Demo />
    </SnackbarProvider>
  );
};

export default App;
