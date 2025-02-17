import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import BooksPage from './pages/books.jsx';
import './styles/global.css';
import TodoApp from './components/todo/TodoApp.jsx';
import ErrorPage from './pages/error-page.jsx';
import { AuthWrapper } from './components/context/auth.context.jsx';
import PrivateRoutes from './routes/private.routes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/books",
        element: <BooksPage />
        // (<PrivateRoutes>
        //   <BooksPage />
        // </PrivateRoutes>)
      },
      {
        path: "/users",
        element: <UserPage />,
      },
    ],

  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>,
)
