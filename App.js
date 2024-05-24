import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthPrivateRoute, DashboardPrivateRoute } from './PrivateRoute/PrivateRoute';
import Login from './Componets/Login';
import SignUp from './Componets/Signup';
import Home from './Componets/Home';
import DashboardLayout from './Layout/DashboardLayout';
import Profile from './Componets/Profile';
import Settings from './Componets/Settings';

function App() {
  const router =createBrowserRouter([{
    element:<AuthPrivateRoute/>,
    children:[{
      path:'/',
      element:<Login/>
    },{
      path:'/signup',
      element:<SignUp/>
    }]
  },{
    element:<DashboardPrivateRoute/>,
    children:[{
      element:<DashboardLayout/>,
      children:[
        {
        index:true,
        path:'/home',
        element:<Home/>
      },
    {
      path:'/profile',
      element:<Profile/>
    },
  {
      path:'/settings',
      element:<Settings/> 
  }]      
    }]
  }])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
