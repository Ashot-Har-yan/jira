import { useState } from "react";

const Login = ()=>{
    let [count,setCount] = useState(0)

    return(
        <div>
            <button onClick={()=>setCount(++count)}>{count}</button>
        </div>
    )
}
export default Login