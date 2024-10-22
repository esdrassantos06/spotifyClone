import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Search from "./pages/search.jsx";
import Premium from "./pages/premium.jsx";
import Home from "./pages/home.jsx";
import ErrorPage from "./pages/errorpage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/search', element: <Search /> },
      { path: '/premium', element: <Premium /> },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
