import { Home, Log_In , Sign_Up} from "../pages";

const publicRoute = [
    {
        name:"Home",
        path: "/",
        component: Home,
    },
    {
        name:"Home",
        path: "/home",
        component: Home,
    },
    {
        name:"Log-In",
        path: "/log-in",
        component: Log_In,
    },
    {
        name:"Sign-Up",
        path: "/sign-up",
        component: Sign_Up,
    },
]

export default publicRoute;