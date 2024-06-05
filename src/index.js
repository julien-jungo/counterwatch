import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';
import Heroes from './components/routes/Heroes';
import Hero from './components/routes/Hero';
import Root from './components/routes/Root';
import NotFound from './components/routes/NotFound';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          element: <Navigate to='heroes' />
        },
        {
          path: 'heroes',
          element: <Heroes />,
        },
        {
          path: 'heroes/:id',
          element: <Hero />,
          errorElement: <NotFound />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
  ],
  {
    basename: '/counterwatch'
  }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
