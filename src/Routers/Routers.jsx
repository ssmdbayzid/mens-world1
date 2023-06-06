import { Route, Routes } from "react-router"
import publicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"
import RequireAuth from "../pages/RequireAuth/RequireAuth"
import { Purchase, ShoppingCart } from "../pages"


const Routers = () => {
    return (
        <Routes>
             {/*!---------- Public Route-------  */}
             {
                publicRoute.map((route, index)=>
                <Route key={index} path={route.path} element={< route.component/>} />)
             }


             {/* -------------- Private Route ------------- */}
             
             {/* {
                PrivateRoute.map((route, index)=> <Route key={index} path={route.path} element={<RequireAuth>
                <route.component /> </RequireAuth>
            } />)
             } */}
             {
                PrivateRoute.map((route, index)=> <Route key={index} path={route.path} 
                element={<route.component></route.component>} />)
             }
             
        </Routes>
    )
}

export default Routers