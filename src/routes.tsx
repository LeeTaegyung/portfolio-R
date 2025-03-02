import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [{ path: "/", element: <Home /> }],
    },
    {
        path: "/detail",
        element: null,
    },
];

export default routes;
