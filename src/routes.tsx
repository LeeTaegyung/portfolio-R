import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Detail from "./pages/Detail/Detail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "/detail/:depth/:index",
                element: <Detail />,
            },
        ],
    },
];

export default routes;
