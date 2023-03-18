import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import PrivateRouter from './routes/PrivateRouter';
import Orders from './Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <PrivateRouter><Home></Home></PrivateRouter>
        },
        {
          path: '/order',
          element: <PrivateRouter><Orders></Orders></PrivateRouter>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
