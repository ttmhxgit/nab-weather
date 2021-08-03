import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { SWRConfig } from 'swr';
import { createToast, destoryAllToasts } from 'vercel-toast';
import 'vercel-toast/dist/vercel-toast.css';

ReactDOM.render(
  <SWRConfig
    value={{
      onError: (error) => {
        if (error) {
          createToast(`Error: ${error}`, {
            type: 'error',
          });
        }
      },
      onSuccess: (data) => {
        if (data) {
          destoryAllToasts();
        }
      },
      shouldRetryOnError: false,
    }}
  >
    <App />
  </SWRConfig>,
  document.getElementById('root'),
);
