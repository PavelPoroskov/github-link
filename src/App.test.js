import React from 'react';
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  await act( async () => {
    const root = ReactDOM.createRoot(div);
    root.render(<App />)

    root.unmount()
  })
});
