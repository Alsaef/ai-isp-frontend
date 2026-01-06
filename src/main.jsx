import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import LoginPage from './Pages/Login.jsx';
import RegisterPage from './Pages/Register.jsx';
import { AuthProvider } from './provider/AuthProvider.jsx';
import DashboardLayout from './Root/DashboardLayout.jsx';
import DashboardHome from './dashboard -ages/DashboardHome.jsx';
import CreatePackage from './dashboard -ages/CreatePackage.jsx';
import PrivateRoute from './private/PrivateRoute.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AdminPrivate from './private/AdminPrivate.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
      {
        path: "/services",
        element: <Services />, 
      },
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/register',
        element:<RegisterPage></RegisterPage>
      }
     
    ],
  },

  // dashboard layout and path nested routing

  {
    path:'/dashboard',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
     { path:'/dashboard/home',
      element:<AdminPrivate><DashboardHome></DashboardHome></AdminPrivate>
    },
    {
      path:'/dashboard/createPackage',
      element:<AdminPrivate><CreatePackage></CreatePackage></AdminPrivate>
    }
    ]
  }


]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
  </StrictMode>,
)
