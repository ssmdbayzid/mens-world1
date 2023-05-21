import { Route, Routes } from "react-router"
import publicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"


const Routers = () => {
    return (
        <Routes>
             {/*!---------- Public Route-------  */}
             {
                publicRoute.map((route, index)=>
                <Route key={index} path={route.path} element={< route.component/>} />)
             }


             {/* -------------- Private Route ------------- */}
             {
                PrivateRoute.map((route, index)=> <Route key={index} path={route.path} element={<route.component />} />)
             }
        </Routes>
    )
}

export default Routers