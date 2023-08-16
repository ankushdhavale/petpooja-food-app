import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
       <div>
         <h1>OOPS </h1>
        <h4>Somthing Wents Wrong</h4>
        <h1>{err.statusText +":" + err.status}</h1>
        <h2>{err.data}</h2>
       </div>
    )
}

export default Error;