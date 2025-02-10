import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth : async ()=>{
    try {
        const res = await axiosInstance.get('auth/check')
        set({authUser:res.data})
        
    }
    catch(error){
        set({authUser:null})
        console.log(error)
    }
    finally{
        set({isCheckingAuth:false})
    }
  },
  singup : async (data)=>{
    set({isSigningUp:true})
    try{
       const response =  await axiosInstance.post('/auth/singup', data)
       set({authUser:response.data})
       toast.success("account was created successfully ! ")

    }
    catch(error){
        toast.error(error.response.data.message)
        set({authUser:null})
        console.log(error)
    }
    finally{
        set({isSigningUp:false})  
    }
  },
  login : async (data)=>{
    set({isLoggingIn:true})
    try{
       const response =  await axiosInstance.post('/auth/login', data)
       set({authUser:response.data})
       toast.success("Welcome back ! ")

    }
    catch(error){
        toast.error(error.response.data.message)
        set({authUser:null})
        console.log(error)
    }
    finally{
        set({isLoggingIn:false})  
    }
  }

}));