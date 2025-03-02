import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Detail from "./pages/Detail/Detail";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/detail",
                element: <Detail />,
            },
        ],
    },
];

export default routes;
