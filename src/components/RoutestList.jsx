import { BillingIcon,DashboartIcon2,ProfileIcon2,RTLIcon,SingUpIcon2,TablesIcon,SingInIcon2 } from "../assets/icon";
import Billing from "../pages/Dashboart/Billing";
import Dashboart from "../pages/Dashboart/Dashboart";
import Tables from "../pages/Dashboart/Tables";
import RTL from "../pages/Dashboart/RTL";
import Profile from "../pages/Dashboart/Profile";
import SignIn from "../pages/Dashboart/SignIn"
import SignUp from "../pages/Dashboart/SignUp"






export const RoutestList =[
    {
        id:1,
        path:"/",
        Icon:<DashboartIcon2/>,
        element:<Dashboart/>,
        title:"Dashboart"
    },
    {
        id:2,
        path:"/tables",
        Icon:<TablesIcon/>,
        element:<Tables/>,
        title:"Tables"
    },
    {
        id:3,
        path:"/billing",
        Icon:<BillingIcon/>,
        element:<Billing/>,
        title:"Billing"
    },
    {
        id:4,
        path:"/rtl",
        Icon:<RTLIcon/>,
        element:<RTL/>,
        title:"RTL"
    },
    {
        title:"ACCOUNT PAGES",
    },
    {
        id:5,
        path:"/profile",
        Icon:<ProfileIcon2/>,
        element:<Profile/>,
        title:"Profile"
    },
    {
        id:6,
        path:"/sign-in",
        Icon:<SingInIcon2/>,
        element:<SignIn/>,
        title:"Sign In"
    },
    {
        id:7,
        path:"/sign-up",
        Icon:<SingUpIcon2/>,
        element:<SignUp/>,
        title:"Sign Up"
    },
]


