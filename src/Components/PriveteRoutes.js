import { Navigate } from "react-router-dom"
import { isLogin } from "../utilities"
function PriveteRoute({children}){


    
        return(
            <>
            
            {isLogin() ? children :<Navigate to='/Error/Forbiden' />}

            </>
        )
}
export default PriveteRoute 