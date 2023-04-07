import React from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const Notification = (props) => {
  
    const success=(text)=>{toast.success(text
    ,{position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});}
    const error=(text)=>{toast.error(text
        ,{position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        transition:Flip,
        progress: undefined,
        theme: "light",});}
        const promise=()=>{toast.promise(props.pro,{
       pending:"pending",
        success:"success",
        error:"rejected"
        },{position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            transition:Flip,
            progress: undefined,
            theme: "light",});}

            useEffect(() => {
              getnotify();
              console.log('i fire once');
            },[]);

          const getnotify= function () {
             
            if(props.success)
             success(props.text);
                
            if(props.promise)
            promise();   
            if(props.error)
             error(props.text);
          }
           
          localStorage.setItem("bool",false)
  return (
 
    <div>
          <ToastContainer />
    </div>
  )
}

export default Notification