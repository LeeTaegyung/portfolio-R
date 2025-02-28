import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [{ path: "/", element: <Home /> }],
    },
];

export default routes;
