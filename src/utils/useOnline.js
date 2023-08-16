import { useEffect, useState } from "react";

const useOnline = () => {
   
    const [isOnline , setIsOnline ] = useState(true)

    useEffect(()=>{
       const handelIsOnline = () => {
        setIsOnline(false);
    }
    const handelIsOffline =  () => {
        setIsOnline(true);
    }

    window.addEventListener('offline', handelIsOnline);
    window.addEventListener('online', handelIsOffline);


    return () =>{
        window.removeEventListener('offline', handelIsOnline);
        window.removeEventListener('online', handelIsOffline);
    }
    
    },[])

  

    return isOnline;
}


export default useOnline;