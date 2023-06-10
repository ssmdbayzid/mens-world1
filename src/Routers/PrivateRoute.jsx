import { AllUsers, Dashboard, Purchase, ShoppingCart } from "../pages";

const PrivateRoute = [
    {
        name:"Purchase",
        path: "/purchase/:id",
        component: Purchase,
    },
    {
        name:"ShoppingCart",
        path: "/shoppingCart",
        component: ShoppingCart,
    },
    {
        name:"Dashboard",
        path:"/dashboard",
        component: Dashboard,
    },
    {
        name:"AllUsers",
        path: "/allusers",
        component: AllUsers,
    },
]

export default PrivateRoute;