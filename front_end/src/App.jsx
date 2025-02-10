import NavBar from "./components/NavBar"
import { Routes , Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SingUpPage from "./pages/SingUpPage"
import LoginPage from "./pages/LoginPage"
import SettingsPage from "./pages/SettingsPage"
import ProfilPage from "./pages/ProfilPage"
import {useAuthStore} from "./store/useAuthStore"
import { useEffect } from "react"
import { Loader } from "lucide-react";
import { Navigate } from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
  const {isCheckingAuth , authUser, checkAuth} = useAuthStore()
  useEffect(()=>{
    checkAuth() 
    console.log(authUser);
    localStorage.setItem("user" , authUser)
  }, [])
  if(isCheckingAuth && !authUser){
    return (
      <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
    )
  }
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path="/" element={ authUser ? <HomePage/> : <Navigate to="/login"/>} />
          <Route path="/singup" element={ authUser===null ? <SingUpPage/> : <Navigate to="/"/>  } />
          <Route path="/login" element={ authUser===null ? <LoginPage/> : <Navigate to="/"/>} />
          <Route path="/settings" element={  <SettingsPage/>} />
          <Route path="/profil" element={authUser ? <ProfilPage/> : <Navigate to="/login"/>} />
        </Routes> 
        <Toaster/> 
    </>
  )
}

export default App
