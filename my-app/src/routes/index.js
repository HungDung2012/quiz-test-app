import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Answer from "../pages/Answer";
import Quiz from "../pages/Quiz";
import Topic from "../pages/Topic";
import Logout from "../pages/Logout";


export const routes = [
    {
        path: "/",
        element: <LayoutDefault/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "logout",
                element: <Logout/>
            },
            {
                element: <PrivateRoutes/>,
                children: [
                    {
                        path: "answer",
                        element: <Answer />
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz />
                    },
                    {
                        path: "result/:id",
                        element: <Result />
                    },
                    {
                        path: "topic",
                        element: <Topic />
                    },
                ]
            }
        ]
    }
];

