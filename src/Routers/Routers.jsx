import { Route, Routes} from "react-router"


// import publicRoute from "./PublicRoute"
// import PrivateRoute from "./PrivateRoute"
import RequireAuth from "../pages/RequireAuth/RequireAuth"

import { AllProducts, AllUsers, Dashboard, Home, Log_In, Purchase, ShoppingCart, Sign_Up, UpdateUser } from "../pages"
import CheckOutPage from "../pages/ShoppingCart/CheckOutPage"


const Routers = () => {
    return (
        <Routes>
             <Route path="/" element={< Home />} />
             <Route path="/home" element={< Home />} />
             <Route path="/log-in" element={< Log_In />} />
             <Route path="/sign-up" element={< Sign_Up />} />
             
             <Route path="/purchase/:productId" element={
              <RequireAuth>
             < Purchase />
             </RequireAuth>
             } />
             <Route path="/shoppingCart" element={
                <RequireAuth>
                < ShoppingCart />
                </RequireAuth>
                } />
             <Route path="/checkOut" element={
                <RequireAuth>
                < CheckOutPage />
                </RequireAuth>
                } />

             <Route path="/dashboard" element={
                <RequireAuth>
             < Dashboard/>
             </RequireAuth>
             }>
                <Route path="/dashboard/users" element={<AllUsers />}/>   
                <Route path="/dashboard/products" element={<AllProducts />}/>   
                <Route path="/dashboard/users/:userId" element={<UpdateUser />}/>   
                {/* <Route path="/dashboardupdate-product" element={<AllProducts />}/>    */}
             </Route>

        </Routes>
    )
}

export default Routers