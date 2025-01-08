// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './Pages/Login.jsx';
import Products from './Pages/Products.jsx';
import Register from './Pages/Register.jsx';
import SingleProduct from './Pages/SingleProduct.jsx';
import ProtectedRoutes from './components/ProtectedRoutes.jsx';
import { Provider } from 'react-redux';
import { store } from './Config/redux/store/store.js';
import CartPage from './Pages/CartPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'products',
        element: <ProtectedRoutes component={<Products />}/>,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'product/:id',
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
  </Provider>,
)
