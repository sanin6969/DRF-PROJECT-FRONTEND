import { redirect,Route } from "react-router";


const PrivateRoute=({children,...rest})=>{
    
    return (
        <Route {...rest}>{children}</Route>
    )
}
export default PrivateRoute;