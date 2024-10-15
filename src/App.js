import { useState,useEffect } from "react";
import { Login, Register } from "./pages/auth";
import MainLayout from "./components/layouts/main"
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route,Navigate } from 'react-router-dom';
import Cabinet from "./pages/cabinet";
import { ROUTE_CONSTANTS } from './core/utils/constants';
import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import './styles/global.css'

const App =()=> {
  const [isAuth,setIsAuth] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setIsAuth(Boolean(user))
    })
  },[])
  return (
  <RouterProvider
  router = {
    createBrowserRouter(
      createRoutesFromElements(
       <Route path = "/" element={<MainLayout />} >
        <Route path = { ROUTE_CONSTANTS.LOGIN } element = { isAuth?<Navigate to = { ROUTE_CONSTANTS.CABINET }/>:<Login />}></Route>
        <Route path = { ROUTE_CONSTANTS.REGISTER } element = {isAuth?<Navigate to = { ROUTE_CONSTANTS.CABINET }/>:<Register />}></Route>
        <Route path={ ROUTE_CONSTANTS.CABINET } element={isAuth?<Cabinet />:<Navigate to = { ROUTE_CONSTANTS.LOGIN }/>}/>
       </Route>
      )
    )
  }
  />
  );
}

export default App;
