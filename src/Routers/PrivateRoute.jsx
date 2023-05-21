import { Purchase } from "../pages";

const PrivateRoute = [
    {
        name:"Purchase",
        path: "/purchase/:id",
        component: Purchase,
    }
]

export default PrivateRoute;