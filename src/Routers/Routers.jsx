import { Route, Routes} from "react-router"


// import publicRoute from "./PublicRoute"
// import PrivateRoute from "./PrivateRoute"
// import RequireAuth from "../pages/RequireAuth/RequireAuth"

import { AllProducts, AllUsers, Dashboard, Home, Log_In, Purchase, ShoppingCart, Sign_Up } from "../pages"


const Routers = () => {
    return (
        <Routes>
             <Route path="/" element={< Home />} />
             <Route path="/home" element={< Home />} />
             <Route path="/log-in" element={< Log_In />} />
             <Route path="/sign-up" element={< Sign_Up />} />
             <Route path="/purchase/:id" element={< Purchase />} />
             <Route path="/shoppingCart" element={< ShoppingCart />} />

             <Route path="/dashboard" element={< Dashboard/>}>
                <Route path="/dashboard/users" element={<AllUsers />}/>   
                <Route path="/dashboard/products" element={<AllProducts />}/>   
                {/* <Route path="/dashboardupdate-product" element={<AllProducts />}/>    */}
             </Route>

        </Routes>
    )
}

export default Routers