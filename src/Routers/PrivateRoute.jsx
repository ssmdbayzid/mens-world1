import { Purchase, ShoppingCart } from "../pages";

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
]

export default PrivateRoute;